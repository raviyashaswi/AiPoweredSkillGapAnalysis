# 🚀 AI-Powered Skill Gap Analysis

**An intelligent enterprise HR solution that leverages AI to analyze employee skills, identify gaps, and provide personalized learning recommendations.**

[![GitHub](https://img.shields.io/badge/GitHub-AiPoweredSkillGapAnalysis-blue?style=flat-square&logo=github)](https://github.com/raviyashaswi/AiPoweredSkillGapAnalysis)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)](https://github.com/raviyashaswi/AiPoweredSkillGapAnalysis)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-April%202026-blue?style=flat-square)](https://github.com/raviyashaswi/AiPoweredSkillGapAnalysis)

---

## 📑 Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Architecture](#architecture)
4. [AI Prompt Strategy](#ai-prompt-strategy)
5. [Technology Stack](#technology-stack)
6. [Prerequisites](#prerequisites)
7. [Quick Start Guide](#quick-start-guide)
8. [Deployment Guide](#deployment-guide)
9. [Configuration](#configuration)
10. [Project Structure](#project-structure)
11. [Usage Examples](#usage-examples)
12. [API Reference](#api-reference)
13. [Troubleshooting](#troubleshooting)
14. [Contributing](#contributing)
15. [Future Enhancements](#future-enhancements)
16. [Support & Resources](#support--resources)

---

## 🎯 Overview

The **AI-Powered Skill Gap Analysis** application is an enterprise-grade solution built on **SAP Fiori** and **Cloud Application Programming Model (CAP)** that revolutionizes how organizations manage employee skill development.

### Key Highlights

| Feature | Description |
|---|---|
| 🤖 AI-Powered Analysis | Leverages Groq AI (OpenAI GPT-OSS 20B) for intelligent skill gap identification |
| 📊 Comprehensive Assessment | Analyzes employee profiles, current skills, and career aspirations |
| 🎓 Personalized Learning Paths | Generates 90-day development roadmaps with recommended courses |
| 💼 Enterprise-Grade | Built on SAP BTP with secure authentication and HANA database |
| 🌐 Responsive UI | Modern SAP Horizon theme for seamless user experience |
| 📈 Real-Time Processing | Instant AI analysis with structured JSON responses |

### Use Cases

- **Talent Development** — Identify skill gaps and create targeted learning programs
- **Career Planning** — Help employees map their career progression
- **Succession Planning** — Build skill inventories for future leadership roles
- **Training Optimization** — Recommend relevant and cost-effective courses
- **Department Analytics** — Understand organizational capability levels

---

## ✨ Features

### 1. Employee Management
- Create and maintain employee profiles
- Track current roles, experience, and skills
- Define target roles and career aspirations
- Organize employees by departments
- Draft-enabled records for flexible data entry

### 2. AI-Powered Skill Analysis
- One-click analysis trigger from employee detail page
- Comprehensive skill gap identification
- Intelligent categorization of missing skills
- Risk assessment and priority ranking

### 3. Personalized Learning Recommendations
- Curated course suggestions (top 5)
- Multiple platform support: Coursera, Udemy, LinkedIn Learning, and more
- Direct links to course enrollment
- Platform and duration information

### 4. 90-Day Development Roadmap
- Month-by-month learning progression
- Milestone-based objectives
- Balanced skill and experience building
- Achievable goals aligned with target role

### 5. Department Management
- Department hierarchy and structure
- Manager assignments
- Employee-to-department associations
- Bulk operations support

### 6. Secure Access Control
- OAuth2-based authentication (XSUAA)
- Role-based access control
- Token exchange mechanisms
- Audit trail support

### 7. Data Persistence
- Skill assessments stored with timestamp
- Historical tracking of analyses
- Assessment ID generation (SA-001, SA-002, ...)
- Full audit trail

---

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        SAP BTP Platform                         │
│                                                                 │
│  ┌──────────────┐     ┌──────────────┐     ┌────────────────┐  │
│  │  SAP Fiori   │────▶│  CAP (Node)  │────▶│  SAP HANA DB   │  │
│  │  Frontend    │     │  Backend     │     │  (Persistence) │  │
│  └──────────────┘     └──────┬───────┘     └────────────────┘  │
│                              │                                  │
│                              ▼                                  │
│                    ┌─────────────────┐                          │
│                    │   Groq AI API   │                          │
│                    │ (GPT-OSS 20B)   │                          │
│                    └─────────────────┘                          │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. User inputs employee profile and career goals via SAP Fiori UI
2. CAP backend aggregates employee data and constructs AI prompt
3. Groq AI processes the prompt and returns structured JSON
4. CAP parses and persists the analysis to SAP HANA
5. Results are displayed in the Fiori UI as a 90-day roadmap

---

## 🤖 AI Prompt Strategy

The application uses a carefully engineered prompt to extract consistent, structured responses from the AI model.

### Prompt Design Principles

- **Role assignment** — The model is prompted as an "expert HR consultant and skill development specialist"
- **Structured output** — Responses are requested strictly in JSON format for reliable parsing
- **Contextual richness** — Employee current skills, target role, and industry context are all included
- **Actionability** — Every output section maps directly to UI components

### Sample Prompt Structure

```
You are an expert HR consultant. Given the following employee profile:
- Current Role: {currentRole}
- Target Role: {targetRole}
- Years of Experience: {experience}
- Current Skills: {skills}

Identify skill gaps and provide:
1. Missing skills (categorized by priority)
2. Top 5 course recommendations with links
3. A 90-day development roadmap (Month 1, Month 2, Month 3)

Respond ONLY in valid JSON format.
```

### Response Schema

```json
{
  "skillGaps": [
    { "skill": "string", "priority": "High | Medium | Low", "category": "string" }
  ],
  "courses": [
    { "title": "string", "platform": "string", "url": "string", "duration": "string" }
  ],
  "roadmap": {
    "month1": { "focus": "string", "milestones": ["string"] },
    "month2": { "focus": "string", "milestones": ["string"] },
    "month3": { "focus": "string", "milestones": ["string"] }
  }
}
```

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | SAP Fiori Elements, SAPUI5, SAP Horizon Theme |
| **Backend** | SAP CAP (Node.js), OData V4 |
| **Database** | SAP HANA Cloud |
| **AI Engine** | Groq AI – OpenAI GPT-OSS 20B |
| **Auth** | SAP XSUAA (OAuth2) |
| **Platform** | SAP Business Technology Platform (BTP) |
| **CI/CD** | SAP BTP Continuous Integration & Delivery |

---

## ✅ Prerequisites

Before getting started, ensure the following are installed and configured:

- **Node.js** v18 or higher
- **SAP CAP CLI** (`@sap/cds-dk`)
- **Cloud Foundry CLI** (for BTP deployment)
- **SAP BTP account** with the following services:
  - SAP HANA Cloud instance
  - XSUAA service instance
  - SAP Destination Service
- **Groq API key** — sign up at [console.groq.com](https://console.groq.com)
- **Git**

---

## ⚡ Quick Start Guide

### 1. Clone the Repository

```bash
git clone https://github.com/raviyashaswi/AiPoweredSkillGapAnalysis.git
cd AiPoweredSkillGapAnalysis
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_groq_api_key_here
HANA_HOST=your_hana_host
HANA_USER=your_hana_user
HANA_PASSWORD=your_hana_password
```

### 4. Deploy the Database

```bash
cds deploy --to hana
```

### 5. Run the Application Locally

```bash
cds watch
```

The application will be available at `http://localhost:4004`.

---

## 🚢 Deployment Guide

### Deploy to SAP BTP (Cloud Foundry)

#### Step 1: Login to Cloud Foundry

```bash
cf login -a https://api.cf.<region>.hana.ondemand.com
```

#### Step 2: Build the MTA Archive

```bash
mbt build
```

#### Step 3: Deploy

```bash
cf deploy mta_archives/AiPoweredSkillGapAnalysis_1.0.0.mtar
```

#### Step 4: Verify Deployment

```bash
cf apps
cf services
```

---

## ⚙️ Configuration

### `mta.yaml` Key Parameters

| Parameter | Description | Default |
|---|---|---|
| `GROQ_API_KEY` | API key for Groq AI service | *(required)* |
| `AI_MODEL` | AI model identifier | `llama3-8b-8192` |
| `MAX_TOKENS` | Max tokens per AI response | `2048` |
| `ASSESSMENT_PREFIX` | Prefix for assessment IDs | `SA-` |

### Role Collections (XSUAA)

| Role | Description |
|---|---|
| `SkillAnalysis_Admin` | Full CRUD access to all entities |
| `SkillAnalysis_Manager` | Read/write access to team members |
| `SkillAnalysis_Employee` | Read-only access to own profile |

---

## 📁 Project Structure

```
AiPoweredSkillGapAnalysis/
├── app/
│   └── skill-gap-ui/          # SAP Fiori UI application
│       ├── webapp/
│       │   ├── manifest.json
│       │   └── i18n/
│       └── annotations.cds
├── db/
│   ├── schema.cds             # CDS data model
│   └── data/                  # Sample CSV seed data
├── srv/
│   ├── skill-gap-service.cds  # OData service definition
│   ├── skill-gap-service.js   # Service implementation
│   └── ai-handler.js          # Groq AI integration logic
├── mta.yaml                   # Multi-target application descriptor
├── package.json
└── README.md
```

---

## 💡 Usage Examples

### Trigger an AI Analysis

1. Open the application and navigate to the **Employees** list.
2. Select an employee and open their detail page.
3. Ensure **Current Skills** and **Target Role** are filled in.
4. Click **"Analyze Skill Gap"**.
5. The AI analysis runs and results appear under three tabs:
   - **Skill Gaps** — prioritized list of missing skills
   - **Recommended Courses** — top 5 curated courses
   - **90-Day Roadmap** — month-by-month development plan

### Sample Employee Profile

```json
{
  "name": "Priya Sharma",
  "currentRole": "Junior Developer",
  "targetRole": "Full Stack Engineer",
  "yearsOfExperience": 2,
  "currentSkills": ["JavaScript", "HTML", "CSS", "Git"],
  "department": "Engineering"
}
```

---

## 📡 API Reference

### Base URL

```
https://<app-url>/odata/v4/SkillGapService
```

### Key Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/Employees` | List all employees |
| `POST` | `/Employees` | Create new employee |
| `GET` | `/Employees({id})` | Get employee by ID |
| `POST` | `/Employees({id})/analyzeSkillGap` | Trigger AI analysis |
| `GET` | `/SkillAssessments` | List all assessments |
| `GET` | `/Departments` | List all departments |

### Example: Trigger Analysis

```bash
curl -X POST \
  https://<app-url>/odata/v4/SkillGapService/Employees(guid'<id>')/analyzeSkillGap \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json"
```

---

## 🔧 Troubleshooting

### Common Issues

**AI Analysis returns empty response**
- Verify `GROQ_API_KEY` is correctly set in environment variables.
- Check that the employee has both `currentSkills` and `targetRole` populated.
- Review backend logs: `cf logs <app-name> --recent`

**HANA connection fails on startup**
- Ensure the HANA Cloud instance is running and the binding is correct.
- Re-run `cds deploy --to hana` to recreate tables.

**XSUAA authentication errors**
- Confirm the XSUAA service instance is bound to the application.
- Verify the user has the correct role collection assigned in BTP Cockpit.

**Fiori UI not loading**
- Clear browser cache and reload.
- Check that the `approuter` destination is correctly configured.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) standard for commit messages.

---

## 🔮 Future Enhancements

- [ ] **Team-level Analytics Dashboard** — aggregate skill gap insights across departments
- [ ] **Integration with SAP SuccessFactors** — sync employee data automatically
- [ ] **Multi-language Support** — i18n for regional deployments
- [ ] **Skills Taxonomy Engine** — industry-standard skill classification
- [ ] **Email Notifications** — automated progress reminders at roadmap milestones
- [ ] **Export to PDF** — downloadable skill gap reports for managers
- [ ] **Mobile App** — native SAP Mobile Cards integration

---

## 📬 Support & Resources

| Resource | Link |
|---|---|
| SAP CAP Documentation | [cap.cloud.sap](https://cap.cloud.sap) |
| SAP Fiori Design Guidelines | [experience.sap.com/fiori-design-web](https://experience.sap.com/fiori-design-web) |
| Groq AI Console | [console.groq.com](https://console.groq.com) |
| SAP BTP Cockpit | [cockpit.btp.cloud.sap](https://cockpit.btp.cloud.sap) |
| GitHub Issues | [Open an Issue](https://github.com/raviyashaswi/AiPoweredSkillGapAnalysis/issues) |

---
