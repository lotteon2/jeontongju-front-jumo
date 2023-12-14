import { useIsMutating } from 'react-query';
import { productApi } from '../../apis/product/productAPIService';
import { useUpdateProductStore } from '../../stores/Product/UpdateProduct/UpdateProductStore';
import { useMutation } from '../../libs/core/react-query';

const UPDATE_PRODUCT_MUTATION_KEY = '@product/update';

export const useUpdateProductMutation = () => {
	const [productId, productName, productPrice, registeredQuantity, isActivate] = useUpdateProductStore((state) => [
		state.productId,
		state.productName,
		state.productPrice,
		state.productStock,
		state.productVisibility,
	]);
	const { mutateAsync } = useMutation(
		() =>
			productApi.updateProduct(productId, {
				productName,
				productPrice,
				registeredQuantity,
				isActivate,
			}),
		{
			mutationKey: [UPDATE_PRODUCT_MUTATION_KEY],
		},
	);

	const isMutating = useIsMutating([UPDATE_PRODUCT_MUTATION_KEY]) > 0;

	return {
		mutateAsync,
		isMutating,
	};
};
