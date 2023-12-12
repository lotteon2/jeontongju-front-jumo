import { useIsMutating } from 'react-query';
import { useMutation } from '../../libs/core/react-query';
import { orderApi } from '../../apis/order/orderAPIService';

const CONFIRM_DELIVERY_MUTATION_KEY = '@delivery/confirm';

export const useConfirmDeliveryMutation = () => {
	const { mutateAsync } = useMutation((deliveryId: number) => orderApi.confirmDelivery(deliveryId), {
		mutationKey: [CONFIRM_DELIVERY_MUTATION_KEY],
	});

	const isMutating = useIsMutating([CONFIRM_DELIVERY_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
