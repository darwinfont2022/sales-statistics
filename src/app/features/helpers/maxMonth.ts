import { DictionaryType } from "../../../types/DictionaryType";
import { SaleType } from "../../../types/SaleType";
import { getSalesByNameAgency } from "./getSalesByNameAgency";

interface MonthType { [key: string]: string };

const MONTH: MonthType = {
  '1': 'ENERO',
  '2': 'FEBRERO',
  '3': 'MARZO',
  '4': 'ABRIL',
  '5': 'MAYO',
  '6': 'JUNIO',
  '7': 'JULIO',
  '8': 'AGOSTO',
  '9': 'SEPTIEMBRE',
  '10': 'OCTUBRE',
  '11': 'NOBIEMBRE',
  '12': 'DICIEMBRE',
};

export const maxMonth = async (companyName: string) => {
  try {
    const salesByName: SaleType[] | undefined = await getSalesByNameAgency(companyName);

    if (salesByName !== undefined) {
      const monthDictionary: DictionaryType = {}

      salesByName.forEach((sale: SaleType) => {
        const saleMonth = new Date(sale.day).getMonth()
        if (saleMonth in monthDictionary) {
          monthDictionary[saleMonth] += 1;
        } else {
          monthDictionary[saleMonth] = 1;
        }
      })

      const max = Math.max(...Object.values(monthDictionary))

      for (let key of Object.keys(monthDictionary)) {
        if (monthDictionary[Number(key)] === max) {
          return MONTH[key];
        }
      }
    }
  } catch (_) {
    throw new Error();
  }
}