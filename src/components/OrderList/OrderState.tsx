import styled from '@emotion/styled';
import { Input } from 'antd';
import { useState } from 'react';
import { ORDER_STATE, translateOrderState } from '../../constants/OrderStateType';
import Button from '../common/Button';
import { useRegisterDeliveryMutation } from '../../mutations/order/useRegisterDeliveryCode';
import { useGetMyOrderListQuery } from '../../queries/useGetMyOrderListQuery';
import { Toast } from '../common/Toast';
import { useConfirmDeliveryMutation } from '../../mutations/order/useConfirmDeliveryMutation';
import { useRegisterDeliveryStore } from '../../stores/Cash/Delivery/RegisterDeliveryStore';

const OrderState = ({ state, deliveryId }: { state: keyof typeof ORDER_STATE; deliveryId: number }) => {
	const { mutateAsync } = useRegisterDeliveryMutation();
	const { mutateAsync: mutateConfirmAsync } = useConfirmDeliveryMutation();
	const { refetch } = useGetMyOrderListQuery();
	const [deliveryCode, setDeliveryCode] = useState<string>();

	const handleRegisterOrderNumber = async () => {
		setDeliveryCode(deliveryCode);
		try {
			const result = await mutateAsync({ deliveryCode, deliveryId });
			if (result.code === 200) {
				Toast(true, '운송장 등록이 되었어요.');
				setDeliveryCode('');
				refetch();
			}
		} catch (err) {
			Toast(false, '운송장 등록에 실패했어요.');
		}
	};

	const handleConfirmDelivery = async () => {
		try {
			const result = await mutateConfirmAsync(deliveryId);
			if (result.code === 200) {
				Toast(true, '배송 확정 되었어요.');
				refetch();
			}
		} catch (err) {
			Toast(false, '배송 확정에 실패했어요');
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
			) : state === ORDER_STATE.SHIPPING ? (
				<StyledOrderState onClick={handleConfirmDelivery}>배송 확정하기</StyledOrderState>
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
	cursor: pointer;
`;

const StyledOrderInput = styled.div`
	display: flex;
`;
