import axios from "axios";
import { promisify } from "util";
import { parseString } from "xml2js";
import {
  DeliveryDocumentTyped,
  DeliveryDocumentXML,
  SalesOrderItemTyped,
  SalesOrderItemXMLParsed,
  SalesOrderPartnerXMLParsed,
  SalesOrderTyped,
  SalesOrderXMLParsed,
} from "../../db/model/salesOrderModel";

const parseXml = promisify(parseString);

export default async function initializeSalesOrders() {
  try {
    const apiOpenOrders =
      process.env.API_OPEN_ORDERS ||
      "https://ust-optum.it-cpi019-rt.cfapps.us10-002.hana.ondemand.com/http/salesorder/openorders";

    const response = await axios.get(apiOpenOrders, {
      auth: {
        username: process.env.BTP_USER || "Christian.Obar@ust.com",
        password: process.env.BTP_PASSWORD || "",
      },
    });
    const parsedData = await parseXml(response.data);
    const salesDocuments: SalesOrderTyped[] = transformXML(parsedData);
    return salesDocuments;
  } catch (error: any) {
    console.error("Error opening Sales Orders:", error);
    return [];
  }
}

function transformXML(xmlData: any): SalesOrderTyped[] {
  return xmlData?.A_SalesOrder.A_SalesOrderType.map(
    (sales: SalesOrderXMLParsed) => ({
      OverallDeliveryStatus: sales.OverallDeliveryStatus[0] || "",
      OrganizationDivision: sales.OrganizationDivision[0] || "",
      PurchaseOrderByCustomer: sales.PurchaseOrderByCustomer[0] || "",
      DistributionChannel: sales.DistributionChannel[0] || "",
      SalesOrganization: sales.SalesOrganization[0] || "",
      OverallTotalDeliveryStatus: sales.OverallTotalDeliveryStatus[0] || "",
      SoldToParty: sales.SoldToParty[0] || "",
      Items:
        sales.to_Item?.[0]?.A_SalesOrderItemType?.map(
          (item: SalesOrderItemXMLParsed) => ({
            Material: item.Material[0] || "",
            SalesOrderItem: item.SalesOrderItem[0] || "",
            RequestedQuantityUnit: item.RequestedQuantityUnit[0] || "",
            RequestedQuantitySAPUnit: item.RequestedQuantitySAPUnit[0] || "",
            SalesOrder: item.SalesOrder[0] || "",
          })
        ) || [],
      PurchaseOrderByShipToParty: sales.PurchaseOrderByShipToParty[0] || "",
      SalesOrderType: sales.SalesOrderType[0] || "",
      CustomerPurchaseOrderType: sales.CustomerPurchaseOrderType[0] || "",
      Partners:
        sales.to_Partner?.[0]?.A_SalesOrderHeaderPartnerType?.map(
          (partner: SalesOrderPartnerXMLParsed) => ({
            to_Address: partner.to_Address[0] || null,
            PartnerFunction: partner.PartnerFunction[0] || "",
            Customer: partner.Customer[0] || "",
            SalesOrder: partner.SalesOrder[0] || "",
          })
        ) || [],
      SalesOrder: sales.SalesOrder[0] || "",
    })
  );
  // return xmlData?.C_OutboundDeliveryFs.C_OutboundDeliveryFsType.map(
  //   (deliver: ) => ({
  //     OverallDeliveryStatus: xmlData.OverallDeliveryStatus[0],
  //     OrganizationDivision: xmlData.OrganizationDivision[0],
  //     PurchaseOrderByCustomer: xmlData.PurchaseOrderByCustomer[0],
  //     DistributionChannel: xmlData.DistributionChannel[0],
  //     SalesOrganization: xmlData.SalesOrganization[0],
  //     OverallTotalDeliveryStatus: xmlData.OverallTotalDeliveryStatus[0],
  //     SoldToParty: xmlData.SoldToParty[0],
  //     Items: xmlData.to_Item[0].A_SalesOrderItemType.map((item) => ({
  //       Material: item.Material[0],
  //       SalesOrderItem: item.SalesOrderItem[0],
  //       RequestedQuantityUnit: item.RequestedQuantityUnit[0],
  //       RequestedQuantitySAPUnit: item.RequestedQuantitySAPUnit[0],
  //       SalesOrder: item.SalesOrder[0],
  //     })),
  //     PurchaseOrderByShipToParty: xmlData.PurchaseOrderByShipToParty[0],
  //     SalesOrderType: xmlData.SalesOrderType[0],
  //     CustomerPurchaseOrderType: xmlData.CustomerPurchaseOrderType[0],
  //     Partners: xmlData.to_Partner[0].A_SalesOrderHeaderPartnerType.map(
  //       (partner) => ({
  //         to_Address: partner.to_Address[0] || null,
  //         PartnerFunction: partner.PartnerFunction[0],
  //         Customer: partner.Customer[0],
  //         SalesOrder: partner.SalesOrder[0],
  //       })
  //     ),
  //     SalesOrder: xmlData.SalesOrder[0],
  //   })
  // );
}
