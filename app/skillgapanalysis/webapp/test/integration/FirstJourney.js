sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheEmployeesList.iSeeThisPage();
            Then.onTheEmployeesList.onFilterBar().iCheckFilterField("name");
            Then.onTheEmployeesList.onFilterBar().iCheckFilterField("role");
            Then.onTheEmployeesList.onFilterBar().iCheckFilterField("Department");
            Then.onTheEmployeesList.onFilterBar().iCheckFilterField("yearsExp");
            Then.onTheEmployeesList.onTable().iCheckColumns(4, {"name":{"header":"Name"},"role":{"header":"Role"},"Department":{"header":"Department"},"yearsExp":{"header":"YearsExp"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheEmployeesList.onFilterBar().iExecuteSearch();
            
            Then.onTheEmployeesList.onTable().iCheckRows();

            When.onTheEmployeesList.onTable().iPressRow(0);
            Then.onTheEmployeesObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});