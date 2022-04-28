import { CompanyType } from "../../../types/CompanyType";
import { SaleType } from "../../../types/SaleType";

export const reducerAndSort = (sales: SaleType[]): CompanyType[] => {
  const companiesBySale: CompanyType[] = sales.reduce((acc, sale: SaleType) => {
    const companyCurrent: CompanyType | undefined = acc.find((company: CompanyType) => company.nameCompany === sale.nameAgency)
    if (!companyCurrent) {
      return [
        ...acc,
        {
          id: sale.id,
          nameCompany: sale.nameAgency,
          commission: Number(sale.finalPrice) * 0.025,
          totalSales: 1,
          total: Number(sale.finalPrice),
        }
      ]
    }
    if (companyCurrent !== undefined) {
      companyCurrent.total += Number(sale.finalPrice);
      ++companyCurrent.totalSales;
    }
    return acc;
  }, new Array())
  return companiesBySale.sort((a, b) => b.totalSales - a.totalSales);
}