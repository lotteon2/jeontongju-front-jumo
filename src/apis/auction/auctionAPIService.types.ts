import { APPROVE } from '../../constants/ApproveType';

interface ApiResponse<T> {
	code: number;
	message: string;
	detail?: string;
	data?: T;
	failure?: string;
}

export interface ApplyAuctionParams {
	auctionId: string;
	auctionProductName: string;
	startingPrice: number;
	thumbnailImageUrl: string;
	description: string;
	capacity: number;
	alcoholDegree: number;
}

export interface GetAvailableAuctionListResponseData {
	auctionId: string;
	title: string;
}

export interface GetMyApplyAuctionListResponseData {
	auctionId: string;
	auctionProductName: string;
	title: string;
	startDate: string;
	lastBidPrice: number;
	startingPrice: number;
	totalBid: number;
	auctionProductStatus: keyof typeof APPROVE;
}

export type GetAvailableAuctionListResponse = ApiResponse<GetAvailableAuctionListResponseData>;

export type ApplyAuctionResponse = ApiResponse<string>;

export type GetMyApplyAuctionListResponse = ApiResponse<GetMyApplyAuctionListResponseData[]>;
