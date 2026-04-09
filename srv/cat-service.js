const cds = require('@sap/cds')
const Groq = require("groq-sdk");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || "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" });




module.exports = class CatalogService extends cds.ApplicationService {
    init() {
        const { SkillAssessments } = this.entities('com.candy.app')
        this.on('analyzeSkills', 'Employees', async (req) => {
            // console.log(req.params[0])
            const employeeID = req.params[0].ID || req.params[0];

            const employee = await SELECT.one.from('com.candy.app.Employees').where({ ID: employeeID });
            if (!employee) return req.error(404, `Employee ${employeeID} not found`);
            const lastAssessment = await SELECT.one.from(SkillAssessments).orderBy('ID desc');

            let nextID = "SA-001";
            if (lastAssessment && lastAssessment.ID) {
                const lastNum = parseInt(lastAssessment.ID.split('-')[1]);
                nextID = `SA-${(lastNum + 1).toString().padStart(3, '0')}`;
            }

            const chatCompletion = await groq.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: `You are a professional HR advisor.
                        STRICT RULES:
                        - Return ONLY valid JSON
                        - DO NOT use markdown (no \`\`\`)
                        - DO NOT add explanation text
                        - Use double quotes (") for JSON keys
                        - No Headings
                        - Use bullet points and <br> for line breaks

                        FORMAT FOR COURSES (VERY IMPORTANT):
                        For each course use EXACT format:

                        • Course Title: <title><br>
                        Platform: <platform><br>
                        Link: <link><br><br>

                        Ensure links are plain URLs (no markdown).

                        FORMAT:
                        {
                        "greet":"...",
                        "gapAnalysis": "...",
                        "recommendedCourses": "...",
                        "roadmap": "..."
                        }`
                    },
                    {
                        role: "user",
                        content: `Perform a comprehensive Skill Gap Analysis for the following employee: - Name: ${employee.name} - Current Role: ${employee.role} - Years of Experience: ${employee.yearsExp} - Current Skill Set: ${employee.currentSkills} Target Objective: The employee is aiming for the role of ${employee.targetRole}.
                        // Provide:
            1. Greet Employee and mention his target role.
            2. Skill Gap Analysis (Grouped by category).
            3. Top 5 Recommended Courses (Title, Platform, and Link).
            4. 90-Day Roadmap (Month 1, 2, and 3). 
            Use emojis for visual flair and ensure the structure is easy to read.`
                    }
                ],
                model: "openai/gpt-oss-20b",
            });
            let aiResponse = chatCompletion.choices[0]?.message?.content;
            aiResponse = aiResponse.replace(/```json|```/g, '').trim();
            const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);

            if (!jsonMatch) {
                console.error("❌ No JSON found in AI response:", aiResponse);
                return req.error("Invalid response from AI Try again");
            }

            let parsed;

            try {
                parsed = JSON.parse(jsonMatch[0]);
            } catch (err) {
                console.error("❌ JSON Parse Error:", jsonMatch[0]);
                return req.error("Invalid response from AI Try again");
            }
            const assessmentData = {
                ID: nextID,
                employee_ID: employeeID,
                generatedAt: new Date().toISOString(),
                gapAnalysis: parsed.gapAnalysis.replace(/<\/?b>/g, '').replace(/<br>/g, '\n'),
                recommendedCourses: parsed.recommendedCourses.replace(/<\/?b>/g, '').replace(/<br>/g, '\n')
            };
            await INSERT.into('com.candy.app.SkillAssessments').entries(assessmentData);
            const formattedResponse = aiResponse
                .replace(/###/g, '##') // Ensure headings aren't too small
                .replace(/\|/g, '');   // Strip any accidental table pipes
            const finalText = `
<b>${parsed.greet}</b>

## Skill Gap Analysis<br>
${parsed.gapAnalysis}<br><br>

## Recommended Courses<br>
${parsed.recommendedCourses}<br><br>

## 90-Day Roadmap<br>
${parsed.roadmap}
`;
            req.info(finalText.replace(/<\/?b>/g, '').replace(/<br>/g, '\n'));
            // req.info(200, `Perform a comprehensive Skill Gap Analysis for the following employee: - Name: ${employee.name} - Current Role: ${employee.role} - Years of Experience: ${employee.yearsExp} - Current Skill Set: ${employee.currentSkills} Target Objective: The employee is aiming for the role of ${employee.targetRole}.`)
            return assessmentData;
        })
        return super.init()
    }
}