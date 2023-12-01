import styled from '@emotion/styled';
import { Input } from 'antd';
import { ORDER_STATE, translateOrderState } from '../../constants/OrderStateType';
import Button from '../common/Button';
import { useRegisterDeliveryMutation } from '../../mutations/order/useRegisterDeliveryCode';
import { useRegisterDeliveryStore } from '../../stores/Cash/Delivery/RegisterDeliveryStore';
import { useGetMyOrderListQuery } from '../../queries/useGetMyOrderListQuery';
import { Toast } from '../common/Toast';

const OrderState = ({ state, deliveryId }: { state: keyof typeof ORDER_STATE; deliveryId: number }) => {
	const { mutateAsync } = useRegisterDeliveryMutation();
	const { refetch } = useGetMyOrderListQuery();
	const [deliveryCode, setDeliveryId, setDeliveryCode] = useRegisterDeliveryStore((states) => [
		states.deliveryCode,
		states.dispatchDeliveryId,
		states.dispatchDeliveryCode,
	]);

	const handleRegisterOrderNumber = async () => {
		setDeliveryCode(deliveryCode);
		setDeliveryId(deliveryId);
		const result = await mutateAsync();
		if (result.code === 200) {
			Toast(true, '운송장 등록이 되었어요.');
			refetch();
		}
	};

	return (
		<div>
			{state === ORDER_STATE.ORDER ? (
				<StyledOrderInput>
					<Input
						placeholder="운송장 번호를 입력해주세요."
						onChange={(e) => setDeliveryCode(e.target.value)}
						value={deliveryCode}
					/>
					<Button content="저장" Key="saveOrderNumber" btntype="cancel" handleClick={handleRegisterOrderNumber} />
				</StyledOrderInput>
			) : (
				<StyledOrderState>{translateOrderState(state)}</StyledOrderState>
			)}
		</div>
	);
};
export default OrderState;

const StyledOrderState = styled.div`
	border-radius: 8px;
	text-align: center;
	background-color: var(--primary-green);
	color: white;
`;

const StyledOrderInput = styled.div`
	display: flex;
`;
