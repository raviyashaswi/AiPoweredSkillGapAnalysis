sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.candy.app.skillgapanalysis',
            componentId: 'EmployeesObjectPage',
            contextPath: '/Employees'
        },
        CustomPageDefinitions
    );
});