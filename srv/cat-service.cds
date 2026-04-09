using com.candy.app as my from '../db/schema';

service CatalogService {
    entity Employees        as
        projection on my.Employees {
            *,
            currentSkills @UI.MultiLineText,
            department.name as Department,
        }
        actions {
            function analyzeSkills() returns String;
        };

    @readonly
    entity Departments      as projection on my.Departments;

    // entity SkillAssessments as projection on my.SkillAssessments;
}
