import { useIsMutating } from 'react-query';
import { useMutation } from '../../libs/core/react-query';
import { orderApi } from '../../apis/order/orderAPIService';
import { useRegisterDeliveryStore } from '../../stores/Cash/Delivery/RegisterDeliveryStore';

const REGISTER_DELIVERY_MUTATION_KEY = '@delivery/register';

export const useRegisterDeliveryMutation = () => {
	const [deliveryId, deliveryCode] = useRegisterDeliveryStore((state) => [state.deliveryId, state.deliveryCode]);
	const { mutateAsync } = useMutation(() => orderApi.registerDeliveryCode(deliveryId, { deliveryCode }), {
		mutationKey: [REGISTER_DELIVERY_MUTATION_KEY],
	});

	const isMutating = useIsMutating([REGISTER_DELIVERY_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
