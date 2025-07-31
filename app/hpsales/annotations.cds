using SalesOrderService as service from '../../srv/service';
annotate service.SalesOrders with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrderType',
                Value : SalesOrderType,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrganization',
                Value : SalesOrganization,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DistributionChannel',
                Value : DistributionChannel,
            },
            {
                $Type : 'UI.DataField',
                Label : 'OrganizationDivision',
                Value : OrganizationDivision,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SoldToParty',
                Value : SoldToParty,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CustomerNumber',
                Value : CustomerNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'PurchaseOrderByCustomer',
                Value : PurchaseOrderByCustomer,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CustomerPurchaseOrderDate',
                Value : CustomerPurchaseOrderDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'SalesOrderDate',
                Value : SalesOrderDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CreatedAt',
                Value : CreatedAt,
            },
            {
                $Type : 'UI.DataField',
                Label : 'CreatedBy',
                Value : CreatedBy,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrderType',
            Value : SalesOrderType,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SalesOrganization',
            Value : SalesOrganization,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DistributionChannel',
            Value : DistributionChannel,
        },
        {
            $Type : 'UI.DataField',
            Label : 'OrganizationDivision',
            Value : OrganizationDivision,
        },
        {
            $Type : 'UI.DataField',
            Label : 'SoldToParty',
            Value : SoldToParty,
        },
    ],
);

