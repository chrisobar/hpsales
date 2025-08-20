export interface DeliveryDocumentTyped {
  DeliveryDocumentTypeName: string;
  HeaderNetWeight: number;
  DeliveryDocumentType: string;
  TransportationPlanningDate: Date;
  ActualGoodsMovementDate: Date | null;
  SalesOrganization: string;
  HeaderVolume: number;
  SoldToParty: string;
  OverallSDProcessStatusDesc: string;
  DeliveryDate: Date;
  PickingDateCriticality: number;
  OverallPackingStatus: string;
  OverallGoodsMovementStatus: string;
  ShippingPoint: string;
  HeaderGrossWeight: number;
  OverallPickingConfStatus: string;
  ShipToParty: string;
  PickingDate: Date;
  HeaderWeightUnit: string;
  OutboundDelivery: string;
  DocumentDate: Date;
}

// Typed version for easier use
export interface SalesOrderTyped {
  OverallDeliveryStatus: string;
  OrganizationDivision: string;
  PurchaseOrderByCustomer: string;
  DistributionChannel: string;
  SalesOrganization: string;
  OverallTotalDeliveryStatus: string;
  SoldToParty: string;
  Items: SalesOrderItemTyped[];
  PurchaseOrderByShipToParty: string;
  SalesOrderType: string;
  CustomerPurchaseOrderType: string;
  Partners: SalesOrderPartnerTyped[];
  SalesOrder: string;
}

export interface SalesOrderItemTyped {
  Material: string;
  SalesOrderItem: string;
  RequestedQuantityUnit: string;
  RequestedQuantitySAPUnit: string;
  SalesOrder: string;
}
// Main Sales Order XML structure (xml2js parsed with arrays)
export interface SalesOrderXMLParsed {
  OverallDeliveryStatus: [string];
  OrganizationDivision: [string];
  PurchaseOrderByCustomer: [string];
  DistributionChannel: [string];
  SalesOrganization: [string];
  OverallTotalDeliveryStatus: [string];
  SoldToParty: [string];
  to_Item: [SalesOrderItemContainerParsed];
  PurchaseOrderByShipToParty: [string];
  SalesOrderType: [string];
  CustomerPurchaseOrderType: [string];
  to_Partner: [SalesOrderPartnerContainerParsed];
  SalesOrder: [string];
  SalesOrderDate?: [string];
  CustomerPurchaseOrderDate?: [string];
  CreationDate?: [string];
  CreatedByUser?: [string];
}

// Container for sales order items (xml2js parsed)
export interface SalesOrderItemContainerParsed {
  A_SalesOrderItemType: SalesOrderItemXMLParsed[];
}

// Individual sales order item (xml2js parsed)
export interface SalesOrderItemXMLParsed {
  Material: [string];
  SalesOrderItem: [string];
  RequestedQuantityUnit: [string];
  RequestedQuantitySAPUnit: [string];
  SalesOrder: [string];
  ItemDescription?: [string];
  NetAmount?: [string];
  TransactionCurrency?: [string];
  RequestedQuantity?: [string];
  ConfdDelivQtyInOrderQtyUnit?: [string];
}

// Container for sales order partners (xml2js parsed)
export interface SalesOrderPartnerContainerParsed {
  A_SalesOrderHeaderPartnerType: SalesOrderPartnerXMLParsed[];
}

// Individual sales order partner (xml2js parsed)
export interface SalesOrderPartnerXMLParsed {
  to_Address: [string];
  PartnerFunction: [string];
  Customer: [string];
  SalesOrder: [string];
  AddressID?: [string];
  PersonFullName?: [string];
}

export interface SalesOrderPartnerTyped {
  to_Address: string | null;
  PartnerFunction: string;
  Customer: string;
  SalesOrder: string;
}

// Parsed XML structure (xml2js adds arrays)
export interface DeliveryDocumentXML {
  DeliveryDocumentTypeName: [string];
  HeaderNetWeight: [string];
  DeliveryDocumentType: [string];
  TransportationPlanningDate: [string];
  ActualGoodsMovementDate: [string];
  SalesOrganization: [string];
  HeaderVolume: [string];
  SoldToParty: [string];
  OverallSDProcessStatusDesc: [string];
  DeliveryDate: [string];
  PickingDateCriticality: [string];
  OverallPackingStatus: [string];
  OverallGoodsMovementStatus: [string];
  ShippingPoint: [string];
  HeaderGrossWeight: [string];
  OverallPickingConfStatus: [string];
  ShipToParty: [string];
  PickingDate: [string];
  HeaderWeightUnit: [string];
  OutboundDelivery: [string];
  DocumentDate: [string];
}
