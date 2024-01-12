import { CONCEPT } from '../../constants/ProductType/ConceptType';

interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
	failure?: string;
}

export type GetReviewsForDashBoardResponseData = {
	reviewId: number;
	name: string;
	profileImageUrl: string;
	reviewContents: string;
	reviewPhotoImageUrl: string;
	concept: keyof (typeof CONCEPT)[];
	reviewSympathyCount: number;
	createdAt: string;
};

export type GetReviewsForDashBoardResponse = ApiResponse<GetReviewsForDashBoardResponseData[]>;
