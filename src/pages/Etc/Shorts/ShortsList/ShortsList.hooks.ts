import { useEffect } from 'react';
import { useGetMyShortsList } from '../../../../queries/useGetMyShortsListQuery';
import { Toast } from '../../../../components/common/Toast';

export const useShortsList = () => {
	const { data } = useGetMyShortsList();
	useEffect(() => {
		if (!data) return;
		if (data.code !== 200) {
			Toast(false, '쇼츠 리스트를 불러오는 중이에요.');
		}
	}, [data]);
	return {
		data,
	};
};
