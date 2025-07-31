using my.sales as my from '../db/schema';

service SalesOrderService @(requires: 'authenticated-user') {
    @restrict: [
        { grant: ['WRITE'], to: 'Viewer', where: 'CustomerNumber = $user.CustomerNumber' },
        { grant: ['WRITE'], to: 'Admin' }
    ]
    @odata.draft.enabled
    entity SalesOrders as projection on my.SalesOrders;
}
