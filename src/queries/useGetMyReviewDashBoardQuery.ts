import { reviewApi } from '../apis/review/reviewAPIService';
import { useQuery } from '../libs/core/react-query';

const GET_MY_DASHBOARD_REVIEW = '@dashboard/review/get';
export const useGetMyReviewDashBoardQuery = () => {
	return useQuery([GET_MY_DASHBOARD_REVIEW], () => reviewApi.getReviewsForDashBoard(), {
		enabled: true,
	});
};
