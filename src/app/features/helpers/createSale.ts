import { DocumentData } from "firebase/firestore";
import { SaleType } from "../../../types/SaleType";

export const createSale = (doc: DocumentData): SaleType => {
  const sale: SaleType = {
    id: doc.id,
    nameAgency: doc.data()?.nameAgency,
    day: doc.data()?.day,
    name: doc.data()?.name,
    paymentStatus: doc.data()?.paymentStatus,
    finalPrice: doc.data()?.finalPrice,
    datePayment: doc.data()?.datePayment,
    createdAt: doc.data()?.createdAt,
    persons: doc.data()?.persons,
    hour: doc.data()?.hour,
    timeZone: doc.data()?.timeZone,
  }
  return sale;
}