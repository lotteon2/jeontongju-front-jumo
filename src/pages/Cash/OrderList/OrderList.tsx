import { DatePicker, DatePickerProps, Form, Input, Select, Tooltip } from 'antd';
import styled from '@emotion/styled';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import Table from '../../../components/common/Table';
import { useOrderList } from './OrderList.hooks';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';
import { useMyOrderListStore } from '../../../stores/Cash/OrderList/OrderListStore';
import { useGetMyOrderListQuery } from '../../../queries/useGetMyOrderListQuery';

const OrderList = () => {
	const { data: orderData } = useGetMyOrderListQuery();
	const { columns } = useOrderList();
	const products = useMyInfoStore((state) => state.products);
	const [page, setPage, isDeliveryCodeNull, setIsDeliveryCodeNull, setProductId, selectedDate, setSelectedDate] =
		useMyOrderListStore((state) => [
			state.page,
			state.dispatchPage,
			state.isDeliveryCodeNull,
			state.dispatchIsDeliveryCodeNull,
			state.dispatchProductId,
			state.selectedDate,
			state.dispatchSelectedDate,
		]);

	useEffect(() => {
		setPage(1);
	}, [selectedDate]);

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		setSelectedDate(dateString.replaceAll('-', ''));
	};

	return (
		<div>
			<StyledCashListHeader>
				<StyledCashListLeftHeader>
					<DatePicker onChange={onChange} />
					<Select options={products} placeholder="전체(기본)" onChange={setProductId} />
					<Tooltip
						title="상품별, 기간별, 운송장 입력 여부별 필터링을 해서 주문 내역을
        확인해보세요."
					>
						<InfoCircleOutlined />
					</Tooltip>
				</StyledCashListLeftHeader>
				<div>
					<Form.Item label="운송장 미입력 상품만 보기" name="emailCode">
						<Input
							type="checkbox"
							checked={isDeliveryCodeNull}
							onChange={(e) => setIsDeliveryCodeNull(!!e.target.checked)}
						/>
					</Form.Item>
				</div>
			</StyledCashListHeader>
			{orderData ? (
				<Table
					data={orderData.data.content}
					columns={columns}
					pagination={{
						pageSize: 10,
						current: page,
						onChange: setPage,
						defaultCurrent: 1,
						total: orderData.data.totalElements,
					}}
				/>
			) : (
				<div>로딩중</div>
			)}
		</div>
	);
};
export default OrderList;

const StyledCashListHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledCashListLeftHeader = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`;
