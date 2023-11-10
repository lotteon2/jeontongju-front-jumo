import { Form, Input, Rate } from 'antd';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { AddProductFieldType } from '../../../constants/AddProductFieldType';
import { useAddProduct } from './AddProduct.hooks';
import Button from '../../../components/common/Button';

const AddProduct = () => {
	const { email, setEmail, onFinish, password, setPassword } = useAddProduct();
	return (
		<div>
			<Form
				name="basic"
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600, width: '100%' }}
				onFinish={onFinish}
				autoComplete="off"
			>
				<Form.Item<AddProductFieldType>
					label="상품 이름"
					name="productName"
					rules={[{ required: true, message: '상품 이름을 입력해주세요' }]}
				>
					<Input
						placeholder="고객들에게 보여질 상품 이름을 입력해주세요."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="상품 설명"
					name="desc"
					rules={[{ required: true, message: '상품 설명을 입력해주세요' }]}
				>
					<Input
						placeholder="고객들에게 보여질 상품 이름을 입력해주세요."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="정확한 도수"
					name="alcoholPercent"
					rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
				>
					<Input
						type="number"
						placeholder="고객들에게 보여질 정확한 도수를 입력해주세요.(숫자만)"
						value={password as string}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="대표 원료"
					name="material"
					rules={[{ required: true, message: '대표 원료를 선택해주세요.' }]}
				>
					<Input.Password
						placeholder="비밀번호를 다시 한 번 입력해주세요."
						value={password as string}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Item>
				<span>상품의 맛을 선택해주세요</span>
				<span>(5점 만점, 1점:약함, 5점:강함)</span>
				<Form.Item<AddProductFieldType>
					label="신맛"
					name="sour"
					rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
				>
					<Rate character={<LiaWineBottleSolid />} />
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="단맛"
					name="sweet"
					rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
				>
					<Rate character={<LiaWineBottleSolid />} />
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="향"
					name="scent"
					rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
				>
					<Rate character={<LiaWineBottleSolid />} />
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="바디감"
					name="body"
					rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
				>
					<Rate character={<LiaWineBottleSolid />} />
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="탄산감"
					name="carbonation"
					rules={[{ required: true, message: '신맛을 입력해주세요.' }]}
				>
					<Rate character={<LiaWineBottleSolid />} />
				</Form.Item>
				<Form.Item<AddProductFieldType>
					label="주모 소개"
					name="desc"
					rules={[{ required: true, message: '주모소개를 입력해주세요.' }]}
				>
					<Input
						placeholder="고객들에게 보여질 주모 소개를 입력해주세요."
						value={password as string}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Item>
				{/* <Form.Item<AddProductFieldType>
					label="설빙고 가입 여부(추후 수정 불가)"
					name="isSulbing"
					rules={[{ required: true, message: '설빙고 가입 여부를 입력해주세요.' }]}
				> */}
				{/* <Radio.Group>
						<Radio value={1}>평생 인연 맺기</Radio>
						<Radio value={2}>다음생에 인연 맺기</Radio>
					</Radio.Group> */}
				{/* </Form.Item> */}
				<Button content="상품 등록하기" key="addProduct" isFull handleClick={onFinish} htmlType="submit" />
			</Form>
		</div>
	);
};
export default AddProduct;
