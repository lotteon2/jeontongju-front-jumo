import { ColumnsType } from 'antd/es/table';
import { LiveListTableDataType } from '../../../constants/TableDataType/LiveListTableDataType';
import { useGetMyApplyAuctionListQuery } from '../../../queries/useGetMyApplyAuctionListQuery';
import { GetMyApplyAuctionListResponseData } from '../../../apis/auction/auctionAPIService.types';
import ApproveState from '../../../components/Live/ApproveState/ApproveState';
import { useGetAvailableAuctionListQuery } from '../../../queries/useGetAvailableAuctionListQuery';

export const useLiveTable = () => {
	const { data: auctionListData } = useGetMyApplyAuctionListQuery();
	const { data: availableAuctionData } = useGetAvailableAuctionListQuery();

	console.log(auctionListData);
	const columns: ColumnsType<GetMyApplyAuctionListResponseData> = [
		{
			title: '경매이름',
			dataIndex: 'title',
			key: 'title',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '방송일',
			dataIndex: 'startDate',
			key: 'startDate',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '상품이름',
			dataIndex: 'auctionProductName',
			key: 'auctionProductName',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '낙찰가격',
			dataIndex: 'lastBidPrice',
			key: 'lastBidPrice',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '시작가',
			dataIndex: 'startingBidPrice',
			key: 'startingBidPrice',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '참여자수',
			dataIndex: 'totalBid',
			key: 'totalBid',
			render: (text) => <span>{text}</span>,
		},
		{
			title: '상태',
			dataIndex: 'auctionProductStatus',
			key: 'auctionProductStatus',
			render: (text) => <ApproveState approveState={text} />,
		},
	];

	return {
		columns,
		auctionListData,
		availableAuctionData,
	};
};
