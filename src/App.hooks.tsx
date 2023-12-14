import { useRef, useEffect } from 'react';
import { createQueryClient } from './libs/core/react-query/core';

export const useAppMount = () => {
	const queryClientRef = useRef(createQueryClient());

	return {
		queryClientRef,
		useAppMount,
	};
};
