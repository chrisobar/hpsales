namespace my.sales;

/**
 * Sales Orders header data.
 * Represents a customer sales order created by the business user.
 */
entity SalesOrders {
  key ID                         : UUID;              // Unique identifier for the sales order
  SalesOrderType                 : String(4);         // Order type code (e.g., ZOR)
  SalesOrganization              : String(4);         // Sales organization ID
  DistributionChannel            : String(2);         // Distribution channel code
  OrganizationDivision           : String(2);         // Division code
  SoldToParty                    : String(10);        // Sold-to party customer code
  CustomerNumber                 : String(10);        // Customer number (reference for login-based filtering)
  PurchaseOrderByCustomer        : String(30);        // purchase order number
  CustomerPurchaseOrderDate      : Date;              // Date of customer's purchase order
  SalesOrderDate                 : Date;              // Date the sales order is created
  Items                          : Composition of many SalesOrderItems on Items.parent = $self;   // Sales order line items
  Partners                       : Composition of many SalesOrderPartners on Partners.parent = $self; // Associated partners for the order
  CreatedAt                      : Timestamp @cds.on.insert: $now;         // Timestamp when the order was created
  CreatedBy                      : String(50) @cds.on.insert: $user;        // User who created the order
}

/**
 * Line items of a sales order.
 * Each record represents a single material/product and quantity requested.
 */
entity SalesOrderItems {
  key ID                         : UUID;              // Unique identifier for the line item
  parent                         : Association to SalesOrders;  // Associated sales order
  Material                       : String(18);        // Material code or product number
  RequestedQuantity              : Decimal(15,3);     // Quantity requested by the customer
  RequestedQuantityUnit          : String(3);         // Unit of measure (e.g., EA for each)
}

/**
 * Partners involved in a sales order.
 * Includes roles such as ship-to, bill-to, and others.
 */
entity SalesOrderPartners {
  key ID                         : UUID;              // Unique identifier for the partner record
  parent                         : Association to SalesOrders; // Associated sales order
  PartnerFunction                : String(2);         // Partner function code (e.g., SH)
  Customer                       : String(10);        // Partner customer code
}
