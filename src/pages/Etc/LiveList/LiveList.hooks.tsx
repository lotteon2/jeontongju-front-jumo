import { ColumnsType } from 'antd/es/table';
import { LiveListTableDataType } from '../../../constants/TableDataType/LiveListTableDataType';
import { useGetMyApplyAuctionListQuery } from '../../../queries/useGetMyApplyAuctionListQuery';
import { GetMyApplyAuctionListResponseData } from '../../../apis/auction/auctionAPIService.types';
import ApproveState from '../../../components/Live/ApproveState/ApproveState';

export const useLiveTable = () => {
	const { data: auctionListData } = useGetMyApplyAuctionListQuery();
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
			dataIndex: 'startingPrice',
			key: 'startingPrice',
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

	const liveData: LiveListTableDataType[] = [
		{
			liveId: 1,
			productId: 2,
			a: 1,
			b: 1,
			c: 1,
			d: 1,
			key: 1,
		},
	];

	return {
		columns,
		liveData,
		auctionListData,
	};
};
