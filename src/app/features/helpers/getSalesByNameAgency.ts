import { getDocs, query, where } from "firebase/firestore";
import { salesRef } from "../../../firestore/firestore";
import { SaleType } from "../../../types/SaleType";
import { createSale } from "./createSale";

export const getSalesByNameAgency = async (nameAgency: string) => {
  try {
    const resQuery = query(
      salesRef,
      where('nameAgency', '==', nameAgency)
    );
    const docs = await getDocs(resQuery);
    const sales: SaleType[] = []
    docs.forEach(function (doc) {
      sales.push(createSale(doc));
    })
    return sales;
  }
  catch (err) {
    throw new Error("Error on load")
  }
}