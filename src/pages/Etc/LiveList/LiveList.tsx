import { Tooltip, Card } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import LiveContainer from '../../../components/Live/LiveContainer';
import Table from '../../../components/common/Table';
import { useLiveTable } from './LiveList.hooks';

const LiveList = () => {
	const { columns, auctionListData, availableAuctionData } = useLiveTable();
	return (
		<StyledLivePage>
			<StyledLiveTable>
				<h3>나의 경매 참여 내역</h3>
				<Table data={auctionListData ? auctionListData.data : []} columns={columns} />
			</StyledLiveTable>
			<div>
				<StyledInfoContainer>
					<h3>라이브 경매 예정 리스트</h3>
					<Tooltip title="경매 예정 리스트를 눌러 경매 신청을 해보세요.">
						<InfoCircleOutlined />
					</Tooltip>
				</StyledInfoContainer>
				{availableAuctionData ? (
					<LiveContainer auctionData={availableAuctionData.data} />
				) : (
					<Card
						title="참여가능한 경매가 없어요."
						bordered={false}
						style={{
							width: 300,
							cursor: 'pointer',
							boxShadow: '3px 3px 1px 1px light-gray',
							textAlign: 'center',
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<p>전통주.에 라이브 경매를 요청해보세요!</p>
					</Card>
				)}
			</div>
		</StyledLivePage>
	);
};
export default LiveList;

const StyledInfoContainer = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-shrink: 1;
	flex-grow: 1;
`;

const StyledLiveTable = styled.div`
	margin-top: 2rem;
	flex-shrink: 2;
	flex-grow: 2;
`;

const StyledLivePage = styled.div`
	display: flex;
	gap: 4rem;
	justify-content: space-between;
`;
