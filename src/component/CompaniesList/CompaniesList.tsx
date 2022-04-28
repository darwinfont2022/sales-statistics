import { Table, Space, Skeleton } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CompanyType } from "../../types/CompanyType";
import "./CompaniesList.css";
import { useAppSelector } from "../../app/hooks";
import {
  companiesData,
  companiesError,
  companiesLoading,
  selectBestCompany,
  selectCompamies,
  selectCompamiesError,
  selectCompamiesLoading,
} from "../../app/features/companiesSlice";
import { useDispatch } from "react-redux";
import { SaleType } from "../../types/SaleType";
import { getSales } from "../../app/features/helpers/getSales";
import { reducerAndSort } from "../../app/features/helpers/reducerAndSort";
import { maxMonth } from "../../app/features/helpers/maxMonth";

const columns = [
  {
    title: "Nombre de la empresa",
    dataIndex: "nameCompany",
    key: "id",
    sorter: (a: CompanyType, b: CompanyType) =>
      a.nameCompany.localeCompare(b.nameCompany),
  },
  {
    title: "Total de ventas",
    dataIndex: "totalSales",
    key: "id",
    sorter: (a: CompanyType, b: CompanyType) => a.totalSales - b.totalSales,
  },
  {
    title: "Comisión",
    dataIndex: "commission",
    key: "id",
  },
  {
    title: "Detalles",
    key: "id",
    render: (_: string, company: CompanyType) => (
      <Space size="middle">
        <Link to={`/empresas/${company.nameCompany}`}>Detalle</Link>
      </Space>
    ),
  },
];


const CompaniesList = () => {
  const companies = useAppSelector(selectCompamies);
  const bestCompany = useAppSelector(selectBestCompany)
  const loading = useAppSelector(selectCompamiesLoading);
  const error = useAppSelector(selectCompamiesError);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(companiesLoading());
        const sales: SaleType[] = await getSales();
        const companiesSorted = reducerAndSort(sales);
        const monthResult = await maxMonth(companiesSorted[0].nameCompany);
        dispatch(companiesData({ companies: companiesSorted, monthResult }));
      } catch (_) {
        dispatch(companiesError());
      }
    })();
  }, [dispatch]);

  if (error) {
    return <>Error</>;
  }

  if (loading) {
    return (
      <>
        <Skeleton active />
      </>
    );
  }

  return (
    <Table
      columns={columns}
      dataSource={companies}
      pagination={false}
      bordered={true}
      title={() => (
        <div className="companies-list-header">
          <div>
            <div>
              {
                bestCompany.companyName && bestCompany.companyName
              }
            </div>
            <div>
              {
                bestCompany.total && bestCompany.total
              }
            </div>
          </div>
          <div>
            <div>Mes de mas ventas</div>
            <div>
              {
                bestCompany.bestMonth
              }
            </div>
          </div>
        </div>
      )}
    />
  );
};
export default CompaniesList;
