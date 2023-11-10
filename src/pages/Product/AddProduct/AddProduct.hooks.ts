import { useState } from 'react';

export const useAddProduct = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const onFinish = async () => {
		console.log('login test');
		console.log('email', email);
		console.log('password', password);
	};

	return {
		email,
		setEmail,
		password,
		setPassword,
		onFinish,
	};
};
