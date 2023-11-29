import React, { Ref } from 'react';
import styled from '@emotion/styled';
import { Form, Input, InputRef } from 'antd';

interface MyInputProps extends React.HTMLProps<HTMLInputElement> {
	label: string;
	name: string;
}

const MyInput = React.forwardRef<HTMLInputElement, MyInputProps>(({ label, placeholder, name, ...field }, ref) => {
	return (
		<InputContainer>
			<Form.Item label={label} name={name}>
				<Input placeholder={placeholder} style={{ width: '100%', margin: '1rem 0' }} />
			</Form.Item>
		</InputContainer>
	);
});

export default MyInput;

const InputContainer = styled.div``;
