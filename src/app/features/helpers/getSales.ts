import { getDocs } from "firebase/firestore"
import { salesRef } from "../../../firestore/firestore"
import { SaleType } from "../../../types/SaleType"
import { createSale } from "./createSale"

export const getSales = async () => {
  try {
    const data = await getDocs(salesRef)
    const sales: SaleType[] = []
    data.forEach((doc) => {
      sales.push(createSale(doc))
    })
    return sales;
  } catch (err) {
    throw new Error('Error on load');
  }
}