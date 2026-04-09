using CatalogService from './cat-service';


annotate CatalogService.Employees with
@(
    UI.Identification               : [{
        $Type : 'UI.DataFieldForAction',
        Action: 'CatalogService.analyzeSkills',
        Label : 'Run AI Analysis'
    }],

    UI.HeaderInfo                   : {
        TypeName      : 'AI-Powered Skill Gap Analysis',
        TypeNamePlural: 'AI-Powered Skill Gap Analysis',
        ImageUrl      : 'sap-icon://employee',
        Title         : {
            $Type: 'UI.DataField',
            Value: name
        },
        Description   : {
            $Type: 'UI.DataField',
            Value: ID
        },
    },
    UI.DataPoint #Experience             : {
        Value        : yearsExp,
        Title        : 'Experience',
        Criticality : 3
    },
    UI.HeaderFacets                 : [{
        $Type : 'UI.ReferenceFacet',
        Target: '@UI.DataPoint#Experience'
    }, ],

    UI.Facets                       : [
        {
            $Type      : 'UI.ReferenceFacet',
            Label      : 'Employee Details',
            Target     : '@UI.FieldGroup#EmployeeDetails',
            ![@UI.Icon]: 'sap-icon://person-placeholder'
        },
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Department Details',
            Target: '@UI.FieldGroup#DepartmentDetails'
        },

    // ,
    // {
    //     $Type : 'UI.ReferenceFacet',
    //     Label : 'SkillAssessments',
    //     Target: 'assessments/@UI.LineItem'
    // }

    ],
    UI.FieldGroup #DepartmentDetails: {Data: [
        {
            Value: department.ID,
            Label: 'Department ID'
        },
        {
            Value: department.name,
            Label: 'Department Name'
        },
        {
            Value: department.manager,
            Label: 'manager'
        },
    ]},

    UI.FieldGroup #EmployeeDetails  : {Data: [
        {
            Value: name,
            Label: 'Name'
        },
        {
            Value: role,
            Label: 'Role'
        },
        {
            Value: yearsExp,
            Label: 'YearsExp'
        },
        {
            Value: currentSkills,
            Label: 'CurrentSkills'
        },
        {
            Value: targetRole,
            Label: 'targetRole'
        },
        {
            Value: department_ID,
            Label: 'Department ID'
        },
    ]},


    UI.SelectionFields              : [
        name,
        role,
        Department,
        yearsExp
    ],

    UI.LineItem                     : [
        {
            $Type: 'UI.DataField',
            Value: name,
            Label: 'Name'
        },
        {
            $Type: 'UI.DataField',
            Value: role,
            Label: 'Role'
        },
        {
            $Type: 'UI.DataField',
            Value: Department,
            Label: 'Department'
        },
        {
            $Type: 'UI.DataField',
            Value: yearsExp,
            Label: 'YearsExp'
        },
    ]
) {

    // department_ID @(
    //     Common.ValueListWithFixedValues: true,
    //     Common.ValueList               : {
    //         CollectionPath: 'Departments',
    //         Parameters    : [{
    //             $Type            : 'Common.ValueListParameterInOut',
    //             LocalDataProperty: 'department_ID',
    //             ValueListProperty: 'ID'
    //         }]
    //     }
    // );
    Department @(
        Common.ValueListWithFixedValues: true,
        Common.ValueList               : {
            CollectionPath: 'Departments',
            Parameters    : [{
                $Type            : 'Common.ValueListParameterInOut',
                LocalDataProperty: 'Department',
                ValueListProperty: 'name'
            }]
        }
    );
    role       @(
                 // Common.ValueListWithFixedValues: true,
               Common.ValueList: {
        CollectionPath: 'Employees',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: 'role',
            ValueListProperty: 'role'
        }]
    });
    name       @(
                 // Common.ValueListWithFixedValues: true,
               Common.ValueList: {
        CollectionPath: 'Employees',
        Parameters    : [{
            $Type            : 'Common.ValueListParameterInOut',
            LocalDataProperty: 'name',
            ValueListProperty: 'name'
        }]
    });
};

// annotate CatalogService.SkillAssessments with
// @(UI.LineItem: [
//     {
//         $Type: 'UI.DataField',
//         Value: ID,
//         Label: 'ID'
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: generatedAt,
//         Label: 'generatedAt'
//     },
//     {
//         $Type: 'UI.DataField',
//         Value: gapAnalysis,
//         Label: 'gapAnalysis'
//     },

//     {
//         $Type: 'UI.DataField',
//         Value: recommendedCourses,
//         Label: 'recommendedCourses'
//     },

// ]) {};
