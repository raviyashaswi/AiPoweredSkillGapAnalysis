namespace com.candy.app;

using {cuid} from '@sap/cds/common';

@odata.draft.enabled
entity Employees : cuid {
    name          : String @mandatory;
    role          : String @mandatory;
    @assert.range: [ 0, 60 ]
    yearsExp      : Integer @mandatory;
    currentSkills : LargeString;
    targetRole    : String @mandatory;
    department    : Association to Departments;
    assessments   : Association to many SkillAssessments on assessments.employee = $self;
}

entity Departments {
    key ID        : String;
        name      : String;
        manager   : String;
        employees : Association to many Employees on employees.department = $self;
}

entity SkillAssessments {
    key ID                 : String;
        employee           : Association to Employees;
        generatedAt        : DateTime;
        gapAnalysis        : LargeString;
        recommendedCourses : LargeString;
}
