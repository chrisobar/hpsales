sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hpnamespace/hpsales/test/integration/FirstJourney',
		'hpnamespace/hpsales/test/integration/pages/SalesOrdersList',
		'hpnamespace/hpsales/test/integration/pages/SalesOrdersObjectPage',
		'hpnamespace/hpsales/test/integration/pages/SalesOrderItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrdersList, SalesOrdersObjectPage, SalesOrderItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hpnamespace/hpsales') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrdersList: SalesOrdersList,
					onTheSalesOrdersObjectPage: SalesOrdersObjectPage,
					onTheSalesOrderItemsObjectPage: SalesOrderItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);