import {
  Form, Input, Select, Rate, SelectProps,
} from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { LiaWineBottleSolid } from 'react-icons/lia';
import { AddProductFieldType } from '../../../constants/AddProductFieldType';
import { useAddProduct } from './AddProduct.hooks';
import Button from '../../../components/common/Button';
import DaumAddress from '../../../components/common/DaumAddress';
import { SNACK } from '../../../constants/ProductType/SnackType';
import { CONCEPT } from '../../../constants/ProductType/ConceptType';
import { RAW_MATERIAL } from '../../../constants/ProductType/MaterialType';
import { RegisterProductParams } from '../../../apis/product/productAPIService.types';

const AddProduct = () => {
  const [form] = Form.useForm();
  const { register, handleSubmit, control } = useForm<RegisterProductParams>({
    mode: 'onBlur',
    defaultValues: {
      productName: null,
      productDescription: null,
      productThumbnailImageUrl: null,
      productAlcoholDegree: 0,
      productCapacity: 0,
      breweryName: '',
      breweryZonecode: '',
      breweryAddress: '',
      manufacturer: '',
      productPrice: 0,
      registeredQuantity: 0,
      productDetailsImageUrl: '',
      categoryId: 0,
      rawMaterial: null,
      food: null,
      concept: null,
    },
  });

  const onSubmit = handleSubmit((data: RegisterProductParams) => {
    console.log(data);
  });

  const {
    email, setEmail, onFinish, password, setPassword,
  } = useAddProduct();

  const options: SelectProps['options'] = [];
  Object.entries(SNACK).forEach(([key, value]) => options.push({ value: key, label: value }));

  const handleChange = (value: string | string[]) => {
    console.log('here');
    console.log(`Selected: ${value}`);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: '100%' }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      <Form.Item<RegisterProductParams>
        label="상품 이름"
        name="productName"
        rules={[{ required: true, message: '상품 이름을 입력해주세요' }]}
      >
        <Controller
          name="productName"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="고객들에게 보여질 상품 이름을 입력해주세요."
            />
          )}
        />
      </Form.Item>
      <Form.Item<RegisterProductParams>
        label="상품 설명"
        name="productDescription"
        rules={[{ required: true, message: '상품 설명을 입력해주세요' }]}
      >
        <Controller
          name="productDescription"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="고객들에게 보여질 상품 설명을 입력해주세요."
            />
          )}
        />
      </Form.Item>
      <Form.Item<RegisterProductParams>
        label="정확한 도수"
        name="productAlcoholDegree"
        rules={[{ required: true, message: '정확한 도수를 입력해주세요' }]}
      >
        <Controller
          name="productAlcoholDegree"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              placeholder="고객들에게 보여질 정확한 도수를 입력해주세요. (숫자만)"
            />
          )}
        />
      </Form.Item>
      <Form.Item<RegisterProductParams>
        label="상품 용량(ml)"
        name="productCapacity"
        rules={[{ required: true, message: '정확한 용량을 입력해주세요(ml)' }]}
      >
        <Controller
          name="productCapacity"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              placeholder="상품의 정확한 용량을 입력해주세요. (숫자만)"
            />
          )}
        />
      </Form.Item>
      <Form.Item<RegisterProductParams>
        label="대표 원료"
        name="rawMaterial"
        rules={[
          { required: true, message: '대표 원료를 최대 2개 선택해주세요.' },
        ]}
      >
        <Controller
          name="rawMaterial"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              mode="tags"
              size="middle"
              onChange={handleChange}
              placeholder="대표 원료를 최대 2가지 골라주세요."
              style={{ width: '100%', margin: '1rem 0' }}
              options={options}
            />
          )}
        />
      </Form.Item>
      <strong>상품의 맛을 선택해주세요</strong>
      <strong>(5점 만점, 1점:약함, 5점:강함)</strong>
      {/* <Form.Item<RegisterProductParams>
        label="신맛"
        name="taste.sour"
        rules={[{ required: true, message: "신맛을 입력해주세요." }]}
      >
        <Rate character={<LiaWineBottleSolid />} />
      </Form.Item>
      <Form.Item<AddProductFieldType>
        label="단맛"
        name="sweet"
        rules={[{ required: true, message: "신맛을 입력해주세요." }]}
      >
        <Rate character={<LiaWineBottleSolid />} />
      </Form.Item>
      <Form.Item<AddProductFieldType>
        label="향"
        name="scent"
        rules={[{ required: true, message: "신맛을 입력해주세요." }]}
      >
        <Rate character={<LiaWineBottleSolid />} />
      </Form.Item>
      <Form.Item<AddProductFieldType>
        label="바디감"
        name="body"
        rules={[{ required: true, message: "신맛을 입력해주세요." }]}
      >
        <Rate character={<LiaWineBottleSolid />} />
      </Form.Item>
      <Form.Item<AddProductFieldType>
        label="탄산감"
        name="carbonation"
        required
        rules={[{ required: true, message: "신맛을 입력해주세요." }]}
      >
        <Rate character={<LiaWineBottleSolid />} />
      </Form.Item> */}
      <Form.Item<RegisterProductParams>
        label="양조장"
        name="breweryName"
        rules={[{ required: true, message: '양조장 이름을 입력해주세요.' }]}
      >
        <Controller
          name="breweryName"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="양조장 이름을 입력해주세요. " />
          )}
        />
        {/* <Input placeholder="양조장 이름을 정확하게 입력해주세요." /> */}
      </Form.Item>
      <strong>양조장 위치를 입력해주세요.</strong>
      <DaumAddress />
      <Form.Item<RegisterProductParams>
        label="제조사"
        name="manufacturer"
        rules={[{ required: true, message: '제조사 이름을 입력해주세요.' }]}
      >
        <Controller
          name="manufacturer"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="제조사 이름을 입력해주세요. " />
          )}
        />
      </Form.Item>
      <h3>
        고객들을 위해 상품에 대한 정보를 좀 더 알려주세요. (선택 안 해도
        괜찮아요.)
      </h3>
      <strong>상품과 잘 어울리는 안주를 최대 2개 골라주세요.</strong>
      <Form.Item<RegisterProductParams>
        label="대표 원료"
        name="food"
        rules={[
          {
            required: true,
            message: '술과 잘 어울리는 안주를 최대 2가지 골라주세요.',
          },
        ]}
      >
        <Controller
          name="food"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              mode="tags"
              size="middle"
              onChange={handleChange}
              placeholder="술과 잘 어울리는 안주를 최대 2가지 골라주세요."
              style={{ width: '100%', margin: '1rem 0' }}
              options={options}
            />
          )}
        />
      </Form.Item>
      <Select
        mode="tags"
        size="middle"
        placeholder="술과 잘 어울리는 안주를 최대 2가지 골라주세요."
        onChange={handleChange}
        defaultValue={['피자']}
        style={{ width: '100%', margin: '1rem 0' }}
        options={options}
      />
      <strong>상품과 어울리는 태그를 최대 2가지 골라주세요.</strong>
      <Select
        mode="tags"
        size="middle"
        placeholder="상품과 어울리는 태그를 최대 2가지 골라주세요."
        defaultValue={[]}
        onChange={handleChange}
        style={{ width: '100%', margin: '1rem 0' }}
        options={options}
      />
      <Button
        content="상품 등록하기"
        Key="addProduct"
        isfull
        handleClick={onSubmit}
        htmlType="submit"
      />
    </Form>
  );
};
export default AddProduct;
