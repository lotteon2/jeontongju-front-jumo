import { DatePicker, Form, Input, Select, Tooltip } from 'antd';
import styled from '@emotion/styled';
import { InfoCircleOutlined } from '@ant-design/icons';
import Table from '../../../components/common/Table';
import { useOrderList } from './OrderList.hooks';

const OrderList = () => {
	const { orderListData, columns } = useOrderList();
	return (
		<div>
			<StyledCashListHeader>
				<StyledCashListLeftHeader>
					<DatePicker />
					<Select />
					<Tooltip
						title="상품별, 기간별, 운송장 입력 여부별 필터링을 해서 주문 내역을
        확인해보세요."
					>
						<InfoCircleOutlined />
					</Tooltip>
				</StyledCashListLeftHeader>
				<div>
					<Form.Item label="운송장 미입력 상품만 보기" name="emailCode">
						<Input type="checkbox" />
					</Form.Item>
				</div>
			</StyledCashListHeader>
			<Table data={orderListData} columns={columns} />
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
