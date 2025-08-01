import { executeHttpRequest } from "@sap-cloud-sdk/http-client";
import cds, { Request } from "@sap/cds";
import { ApplicationService } from "@sap/cds";

export default class ServiceCatalog extends ApplicationService {
  // constructor(name?: string, model?: cds.CSN, options?: { kind: string; impl: string | cds.ServiceImpl }) {
  //     super(name, model, options);
  // }

  async init(): Promise<void> {
    this.on("CREATE", "SalesOrders", (req: Request) => {});
    await super.init();
    // Additional initialization logic can be added here
  }

  // You can add custom methods or override existing ones here
  async triggerWorkflowDestination(data: any): Promise<any> {
    try {
      return await executeHttpRequest(
        {
          destinationName: "Input_destination_name_in_btp",
        },
        {
          method: "POST",
          url: "/our-api-endpoint",
          // data: {}
        }
      );
    } catch (error: any) {
      console.error("Error triggering workflow destination:", error);
      throw new Error(`Failed to trigger workflow: ${error.message}`);
    }
  }
}
