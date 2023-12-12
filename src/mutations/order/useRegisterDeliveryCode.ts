import { useIsMutating } from 'react-query';
import { useMutation } from '../../libs/core/react-query';
import { orderApi } from '../../apis/order/orderAPIService';

const REGISTER_DELIVERY_MUTATION_KEY = '@delivery/register';

interface RegisterDeliveryParams {
	deliveryId: number;
	deliveryCode: string;
}

export const useRegisterDeliveryMutation = () => {
	const { mutateAsync } = useMutation(
		(params: RegisterDeliveryParams) =>
			orderApi.registerDeliveryCode(params.deliveryId, { deliveryCode: params.deliveryCode }),
		{
			mutationKey: [REGISTER_DELIVERY_MUTATION_KEY],
		},
	);

	const isMutating = useIsMutating([REGISTER_DELIVERY_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
