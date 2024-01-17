import { ColumnsType } from 'antd/es/table';
import { useEffect } from 'react';
import OrderState from '../../../components/OrderList/OrderState';
import { GetMyOrderListResponseData } from '../../../apis/order/orderAPIService.types';
import { useRegisterDeliveryStore } from '../../../stores/Cash/Delivery/RegisterDeliveryStore';
import { useMyOrderListStore } from '../../../stores/Cash/OrderList/OrderListStore';

export const useOrderList = () => {
	const [setDeliveryCode] = useRegisterDeliveryStore((states) => [states.dispatchDeliveryCode]);
	const { clear } = useMyOrderListStore();

	useEffect(() => {
		return () => {
			setDeliveryCode('');
			clear();
		};
	}, []);

	const columns: ColumnsType<GetMyOrderListResponseData> = [
		{
			title: '주문 번호',
			dataIndex: 'ordersId',
			key: 'ordersId',
			align: 'center',
			render: (text, row) => <span>{row.isAuction ? `AU_${text}` : `PR_${text}`}</span>,
		},
		{
			title: '상품 이름',
			dataIndex: 'productName',
			key: 'productName',
			align: 'center',
			render: (text, record) => <span>{text}</span>,
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
			render: (text) => <span>{text.toLocaleString()}원</span>,
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
			render: (text, record) => <OrderState state={text} deliveryId={record.deliveryId} />,
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
