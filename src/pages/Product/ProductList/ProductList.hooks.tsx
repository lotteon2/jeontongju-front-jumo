import { ColumnProps, ColumnsType } from 'antd/es/table';
import { Avatar, Dropdown } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Alert } from '../../../components/common/Alert';
import { Toast } from '../../../components/common/Toast';
import { useUpdateProductStore } from '../../../stores/Product/UpdateProduct/UpdateProductStore';
import { useGetMyProductListQuery } from '../../../queries/useGetProductListQuery';
import { GetProductListResponse, GetProductListResponseData } from '../../../apis/search/searchAPIService.typs';
import { productApi } from '../../../apis/product/productAPIService';
import { useUpdateProductMutation } from '../../../mutations/product/useUpdateProductMutation';

export const useProductUpdateModal = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const { mutateAsync } = useUpdateProductMutation();
	const { refetch } = useGetMyProductListQuery();

	const [
		setProductId,
		setProductDetailImg,
		setProductName,
		setProductPrice,
		setProductStock,
		setProductThumbnail,
		setProductVisibility,
		clearValues,
	] = useUpdateProductStore((state) => [
		state.dispatchProductId,
		state.dispatchProductDetailImg,
		state.dispatchProductName,
		state.dispatchProductPrice,
		state.dispatchProductStock,
		state.dispatchProductThumbnail,
		state.dispatchProductVisibility,
		state.clear,
	]);

	const showModal = (row: GetProductListResponseData) => {
		setIsModalOpen(() => true);
		setProductId(row.productId);
		setProductDetailImg(row.productDetailsImageUrl);
		setProductName(row.productName);
		setProductPrice(row.productPrice);
		setProductStock(row.stockQuantity);
		setProductThumbnail(row.productThumbnailImageUrl);
		setProductVisibility(row.isActivate);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOk = async () => {
		console.log('here');
		setIsLoading(true);
		mutateAsync()
			.then((res) => {
				Toast(true, '상품 수정이 완료되었어요');
				refetch();
				clearValues();
				setIsModalOpen(false);
			})
			.catch((err) => Toast(false, err))
			.finally(() => {
				setIsLoading(false);
			});
	};

	return {
		isModalOpen,
		showModal,
		isDisabled,
		setIsDisabled,
		isLoading,
		setIsLoading,
		handleCancel,
		handleOk,
	};
};

export const useProductListTable = () => {
	const { showModal, isModalOpen, isDisabled, isLoading, handleCancel, handleOk } = useProductUpdateModal();

	const { data: productListData } = useGetMyProductListQuery();

	const handleDeleteProduct = async (id: string) => {
		await productApi
			.deleteProduct(id)
			.then((res) => {
				return res;
			})
			.catch((err) => Toast(false, '상품 삭제에 실패했어요.'));
	};

	const handleDelete = (id: string) => {
		Alert({
			title: '상품을 삭제하시겠어요?',
			text: '삭제하시면 되돌릴 수 없어요.',
		}).then((result) => {
			if (result.isConfirmed) {
				handleDeleteProduct(id)
					.then((res) => {
						Toast(true, '상품 정보가 삭제되었어요');
					})
					.catch((err) => {
						Toast(false, '상품 삭제에 실패했어요.');
					});
			}
		});
	};

	const columns: ColumnProps<GetProductListResponseData>[] = [
		{
			title: '대표 이미지',
			dataIndex: 'productThumbnailImageUrl',
			key: 'productThumbnailImageUrl',
			width: '5%',
			render: (text) => <Avatar src={text || null} size="large" />,
		},
		{
			title: '상품 번호',
			dataIndex: 'productId',
			key: 'productId',
			align: 'center',
		},
		{
			title: '상품 이름',
			dataIndex: 'productName',
			key: 'productName',
		},
		{
			title: '누적 판매개수',
			dataIndex: 'totalSalesCount',
			key: 'totalSalesCount',
			align: 'center',
		},
		{
			title: '판매금액(정가)',
			dataIndex: 'productPrice',
			key: 'productPrice',
			align: 'center',
		},
		{
			title: '재고',
			key: 'stockQuantity',
			dataIndex: 'stockQuantity',
			align: 'center',
		},
		{
			title: '리뷰',
			dataIndex: 'reviewCount',
			key: 'reviewCount',
			align: 'center',
		},
		{
			title: '등록한 쇼츠',
			dataIndex: 'shortsId',
			key: 'shortsId',
			align: 'center',
		},
		{
			title: '공개 여부',
			dataIndex: 'isActivate',
			key: 'isActivate',
			render: (text, row) => <div>{row.isActivate ? '공개' : '비공개'}</div>,
			align: 'center',
		},
		{
			title: '',
			dataIndex: 'key',
			key: 'key',
			align: 'center',
			render: (text, row) => (
				<Dropdown
					menu={{
						items: [
							{
								key: 'updateProduct',
								label: (
									<button type="button" onClick={() => showModal(row)}>
										<EditOutlined /> 수정
									</button>
								),
							},
							{
								key: 'deleteProduct',
								label: (
									<button type="button" onClick={() => handleDelete(row.productId as string)}>
										<DeleteOutlined /> 삭제
									</button>
								),
							},
						],
					}}
				>
					<MoreOutlined />
				</Dropdown>
			),
		},
	];

	return {
		columns,
		isModalOpen,
		isDisabled,
		isLoading,
		handleCancel,
		handleOk,
		productListData,
	};
};
