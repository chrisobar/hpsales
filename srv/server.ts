import cds, { Request } from "@sap/cds";
import initializeSalesOrders from "./iFlow/salesorders";
import { NextFunction, Response } from "express";

cds.on("bootstrap", async (app: any) => {
  // Custom middleware or initialization logic can be added here
  // Initialize Sales Orders from IFLOW

  //   app.use(async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const openSalesOrders = await initializeSalesOrders();
  //       // await cds.run(INSERT.into("SalesOrders").entries(openSalesOrders));
  //       console.log("Sales Orders initialized:", openSalesOrders);
  //     } catch (error: any) {
  //       console.error("Error initializing Sales Orders:", error);
  //     }
  //     next();
  //   });
  try {
    const openSalesOrders = await initializeSalesOrders();
    await cds.run(INSERT.into("SalesOrders").entries(openSalesOrders));
    console.log("Sales Orders initialized:", openSalesOrders);
  } catch (error: any) {
    console.error("Error initializing Sales Orders:", error);
  }
});

export default cds.server;
