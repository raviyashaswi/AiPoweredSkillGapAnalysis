using CatalogService as service from '../../srv/cat-service';
annotate service.Employees with {
    department @Common.ValueList : {
        $Type : 'Common.ValueListType',
        CollectionPath : 'Departments',
        Parameters : [
            {
                $Type : 'Common.ValueListParameterInOut',
                LocalDataProperty : department_ID,
                ValueListProperty : 'ID',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'name',
            },
            {
                $Type : 'Common.ValueListParameterDisplayOnly',
                ValueListProperty : 'manager',
            },
        ],
    }
};

