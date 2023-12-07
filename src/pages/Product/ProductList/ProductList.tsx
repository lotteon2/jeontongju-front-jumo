import { Form, Input, Modal, Radio } from 'antd';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Table from '../../../components/common/Table';
import { useProductListTable, useProductUpdateModal } from './ProductList.hooks';
import Button from '../../../components/common/Button';
import { useUpdateProductStore } from '../../../stores/Product/UpdateProduct/UpdateProductStore';

const ProductList = () => {
	const { isModalOpen, isDisabled, isLoading, handleCancel, handleOk, columns, productListData } =
		useProductListTable();

	const [
		productName,
		setProductName,
		productPrice,
		setProductPrice,
		productDetailImg,
		productThumbnail,
		productStock,
		setProductStock,
		productVisibility,
		setProductVisibility,
	] = useUpdateProductStore((state) => [
		state.productName,
		state.dispatchProductName,
		state.productPrice,
		state.dispatchProductPrice,
		state.productDetailImg,
		state.productThumbnail,
		state.productStock,
		state.dispatchProductStock,
		state.productVisibility,
		state.dispatchProductVisibility,
	]);

	return (
		<div>
			<Table columns={columns} data={productListData ? productListData.data.content : []} />
			<Modal
				title="상품 수정"
				open={isModalOpen}
				destroyOnClose
				onOk={handleOk}
				onCancel={handleCancel}
				maskClosable={false}
				footer={[
					<Button handleClick={handleCancel} content="취소" btntype="cancel" Key="cancelUpdateProduct" />,
					<Button
						handleClick={handleOk}
						content="확인"
						loading={isLoading}
						disabled={isDisabled}
						btntype="positive"
						Key="updateProduct"
					/>,
				]}
			>
				<StyledProductModalContainer>
					<StyledInputContainer>
						<div>상품 이름:</div>
						<Input value={productName} onChange={(e) => setProductName(e.target.value)} />
					</StyledInputContainer>
					<StyledInputContainer>
						<div>상품 가격:</div>
						<Input value={productPrice} onChange={(e) => setProductPrice(e.target.value as unknown as number)} />
					</StyledInputContainer>
					<StyledInputContainer>
						<div>상품 재고:</div>
						<Input value={productStock} onChange={(e) => setProductStock(e.target.value as unknown as number)} />
					</StyledInputContainer>
					<StyledInputContainer>
						<div>공개 여부:</div>
						<Radio.Group style={{ width: '100%' }} value={productVisibility ? 'true' : 'false'}>
							<Radio
								value="true"
								name="visibility"
								checked={productVisibility === true}
								onChange={(e) => setProductVisibility(e.target.value === 'true')}
							>
								공개
							</Radio>
							<Radio
								value="false"
								name="visibility"
								checked={productVisibility === false}
								onChange={(e) => setProductVisibility(e.target.value === 'true')}
							>
								비공개
							</Radio>
						</Radio.Group>
					</StyledInputContainer>
					<div>{productThumbnail}</div>
					<div>{productDetailImg}</div>
				</StyledProductModalContainer>
			</Modal>
		</div>
	);
};
export default ProductList;

const StyledProductModalContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const StyledInputContainer = styled.div`
	display: flex;
	width: 100%;
	margin: 1rem 0;
	align-items: center;
	div {
		width: 30%;
	}
`;
