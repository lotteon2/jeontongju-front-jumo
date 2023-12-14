import { useIsMutating } from 'react-query';
import { productApi } from '../../apis/product/productAPIService';
import { useMutation } from '../../libs/core/react-query';
import { useUpdateShortsStore } from '../../stores/Product/UpdateShorts/UpdateShortsStore';

const DELETE_SHORTS_MUTATION_KEY = '@shorts/delete';

export const useDeleteShortsMutation = () => {
	const shortsId = useUpdateShortsStore((state) => state.selectedShortsId);
	const { mutateAsync } = useMutation(() => productApi.deleteShort(shortsId), {
		mutationKey: [DELETE_SHORTS_MUTATION_KEY],
	});

	const isMutating = useIsMutating([DELETE_SHORTS_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
