sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/candy/app/skillgapanalysis/test/integration/pages/EmployeesList",
	"com/candy/app/skillgapanalysis/test/integration/pages/EmployeesObjectPage"
], function (JourneyRunner, EmployeesList, EmployeesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/candy/app/skillgapanalysis') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesList: EmployeesList,
			onTheEmployeesObjectPage: EmployeesObjectPage
        },
        async: true
    });

    return runner;
});

