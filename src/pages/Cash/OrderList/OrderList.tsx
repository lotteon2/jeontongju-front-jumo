import { DatePicker, DatePickerProps, Form, Input, Select, TimeRangePickerProps, Tooltip } from 'antd';
import styled from '@emotion/styled';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import Table from '../../../components/common/Table';
import { useOrderList } from './OrderList.hooks';
import { useMyInfoStore } from '../../../stores/MyInfo/MyInfoStore';
import { useMyOrderListStore } from '../../../stores/Cash/OrderList/OrderListStore';
import { useGetMyOrderListQuery } from '../../../queries/useGetMyOrderListQuery';
import { OrderStateOptions } from '../../../constants/OrderStateType';

const OrderList = () => {
	const { RangePicker } = DatePicker;
	const { data: orderData } = useGetMyOrderListQuery();
	const { columns } = useOrderList();
	const products = useMyInfoStore((state) => state.products);
	const [
		page,
		setPage,
		isDeliveryCodeNull,
		setIsDeliveryCodeNull,
		setProductId,
		startDate,
		setStartDate,
		endDate,
		setEndDate,
		setOrderState,
	] = useMyOrderListStore((state) => [
		state.page,
		state.dispatchPage,
		state.isDeliveryCodeNull,
		state.dispatchIsDeliveryCodeNull,
		state.dispatchProductId,
		state.startDate,
		state.dispatchStartDate,
		state.endDate,
		state.dispatchEndDate,
		state.dispatchOrderState,
	]);

	useEffect(() => {
		setPage(1);
	}, [startDate, endDate]);

	// const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	// 	setSelectedDate(dateString.replaceAll('-', ''));
	// };
	const rangePresets: TimeRangePickerProps['presets'] = [
		{ label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
		{ label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
		{ label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
		{ label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
	];
	const onRangeChange = (dates, dateStrings) => {
		if (dates) {
			setStartDate(dateStrings[0].replaceAll('-', ''));
			setEndDate(dateStrings[1].replaceAll('-', ''));
		} else {
			console.log('Clear');
		}
	};

	return (
		<div>
			<StyledCashListHeader>
				<StyledCashListLeftHeader>
					<RangePicker presets={rangePresets} onChange={onRangeChange} />
					<Select allowClear options={products} placeholder="전체(기본)" onChange={setProductId} />
					<Select options={OrderStateOptions} placeholder="전체(기본)" onChange={setOrderState} />
					<Tooltip
						title="상품별, 기간별, 주문 상태, 운송장 입력 여부별 필터링을 해서 주문 내역을
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
