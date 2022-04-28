import { Skeleton, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { SaleType } from '../../types/SaleType';
import {
  companyDetail,
  companyError,
  companyLoading,
  companyName,
  selectCompanyError,
  selectCompanyLoading,
  selectCompanySales,
} from '../../app/features/companySlice';
import { getSalesByNameAgency } from '../../app/features/helpers/getSalesByNameAgency';

const columns = [
  {
    title: 'Nombre cliente',
    dataIndex: 'name',
    key: 'id',
    sorter: (a: SaleType, b: SaleType) => a.name.localeCompare(b.name),
  },
  {
    title: 'Personas',
    dataIndex: 'persons',
    key: 'id',
  },
  {
    title: 'Día',
    dataIndex: 'day',
    key: 'id',
    sorter: (a: SaleType, b: SaleType) => a.day.localeCompare(b.day),
  },
  {
    title: 'Hora',
    dataIndex: 'hour',
    key: 'id',
  },
  {
    title: 'Valor venta',
    dataIndex: 'finalPrice',
    key: 'id',
    sorter: (a: SaleType, b: SaleType) => a.name.localeCompare(b.name)
  },
]

export default function CompanyDetail() {
  const { nombre_empresa } = useParams<string>() || '';
  const sales = useAppSelector(selectCompanySales);
  const loading = useAppSelector(selectCompanyLoading);
  const error = useAppSelector(selectCompanyError);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(companyLoading());
        const salesByName = await getSalesByNameAgency(nombre_empresa || '');
        dispatch(companyName(nombre_empresa || ''));
        dispatch(companyDetail(salesByName));
      } catch (err: any) {
        dispatch(companyError())
      }
    })()
  }, [nombre_empresa]);

  if (error) {
    return (
      <>
        Error
      </>
    );
  }

  if (loading) {
    return (<Skeleton active />);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={sales}
        bordered={true}
        pagination={{ pageSize: 30 }}
        scroll={{ y: 200 }}
        title={
          () => (<><h1>{nombre_empresa}</h1></>)
        }
      />
    </div>
  );
}
