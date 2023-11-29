import { useIsMutating } from 'react-query';
import { productApi } from '../../apis/product/productAPIService';
import { useUpdateProductStore } from '../../stores/Product/UpdateProduct/UpdateProductStore';
import { useMutation } from '../../libs/core/react-query';
import { useUpdateShortsStore } from '../../stores/Product/UpdateShorts/UpdateShortsStore';

const UPDATE_SHORTS_MUTATION_KEY = '@shorts/update';

export const useUpdateShortsMutation = () => {
	const [shortsId, shortsTitle, shortsDescription, isActivate] = useUpdateShortsStore((state) => [
		state.selectedShortsId,
		state.selectedShortsTitle,
		state.selectedShortsDescription,
		state.selectedIsActivate,
	]);

	const { mutateAsync } = useMutation(
		() =>
			productApi.updateShort(shortsId, {
				shortsDescription,
				shortsTitle,
				isActivate,
			}),
		{
			mutationKey: [UPDATE_SHORTS_MUTATION_KEY],
		},
	);

	const isMutating = useIsMutating([UPDATE_SHORTS_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
