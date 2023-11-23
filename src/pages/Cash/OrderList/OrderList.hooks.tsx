import { ColumnsType } from 'antd/es/table';
import { OrderListTableDataType } from '../../../constants/TableDataType/OrderListTableDataType';
import OrderState from '../../../components/OrderList/OrderState';

export const useOrderList = () => {
  const columns: ColumnsType<OrderListTableDataType> = [
    {
      title: '주문 번호',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '상품 번호',
      dataIndex: 'productId',
      key: 'productId',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '상품 이름',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '판매 개수',
      dataIndex: 'productSellCount',
      key: 'productSellCount',
      render: (text) => (
        <span>
          {text}
          개
        </span>
      ),
    },
    {
      title: '총 결제 금액',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (text) => (
        <span>
          {text}
          원
        </span>
      ),
    },
    {
      title: '주문 시간',
      dataIndex: 'orderTime',
      key: 'orderTime',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '결제 수단',
      dataIndex: 'orderPaymentMethod',
      key: 'orderPaymentMethod',
      render: (text) => <span>{text}</span>,
    },
    {
      title: '배송 상태',
      dataIndex: 'orderState',
      key: 'orderState',
      render: (text) => <OrderState state={text} />,
    },
    {
      title: '운송장 번호',
      dataIndex: 'waybillNumber',
      key: 'waybillNumber',
      render: (text) => <span>{text}</span>,
    },
  ];

  const orderListData: OrderListTableDataType[] = [
    {
      orderId: 'O123',
      productId: 'P12',
      productName: '복순도가',
      productSellCount: 3,
      totalPrice: 19200,
      orderTime: '2023-11-08 23:00:05',
      orderState: 'SHIPPING',
      waybillNumber: '123-456',
      orderPaymentMethod: 'Naver',
    },
    {
      orderId: 'O123',
      productId: 'P12',
      productName: '복순도가',
      productSellCount: 3,
      totalPrice: 19200,
      orderTime: '2023-11-08 23:00:05',
      orderState: 'ORDER',
      waybillNumber: '',
      orderPaymentMethod: 'Naver',
    },
  ];
  return {
    columns,
    orderListData,
  };
};
