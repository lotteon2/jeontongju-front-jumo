import { ColumnsType } from 'antd/es/table';
import { OrderListTableDataType } from '../../../constants/TableDataType/OrderListTableDataType';
import OrderState from '../../../components/OrderList/OrderState';

export const useOrderList = () => {
	const columns: ColumnsType<OrderListTableDataType> = [
		{
			title: '주문 번호',
			dataIndex: 'ordersId',
			key: 'ordersId',
			align: 'center',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '상품 이름',
			dataIndex: 'productName',
			key: 'productName',
			align: 'center',
			render: (text, record) => <a href={`/product/detail/${record.productId}`}>{text}</a>,
		},
		{
			title: '경매 여부',
			dataIndex: 'isAuction',
			key: 'isAuction',
			align: 'center',
			render: (text: boolean) => <span>{text ? 'Y' : 'N'}</span>,
		},
		{
			title: '판매 개수',
			dataIndex: 'productCount',
			key: 'productCount',
			align: 'center',
			render: (text) => <span>{text}개</span>,
		},
		{
			title: '총 결제 금액',
			dataIndex: 'productTotalAmount',
			key: 'productTotalAmount',
			render: (text) => <span>{text}원</span>,
		},
		{
			title: '주문 시간',
			dataIndex: 'orderDate',
			key: 'orderDate',
			render: (text) => <span>{text.substring(0, 10)}</span>,
		},
		{
			title: '결제 수단',
			dataIndex: 'paymentType',
			key: 'paymentType',
			align: 'center',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '배송 상태',
			dataIndex: 'orderStatus',
			key: 'orderStatus',
			align: 'center',
			render: (text) => <OrderState state={text} />,
		},
		{
			title: '운송장 번호',
			dataIndex: 'deliveryCode',
			key: 'deliveryCode',
			align: 'center',
			render: (text) => <span>{text || '-'}</span>,
		},
	];

	return {
		columns,
	};
};
