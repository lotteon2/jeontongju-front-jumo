import APIService from '../../libs/core/api/APIService';
import { GetReviewsForDashBoardResponse } from './reviewAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/review-service/api`;

class ReviewAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async getReviewsForDashBoard() {
		const data = await this.get<GetReviewsForDashBoardResponse>(`/sellers/reviews`);
		return data;
	}
}
export const reviewApi: ReviewAPIService = ReviewAPIService.shared();
