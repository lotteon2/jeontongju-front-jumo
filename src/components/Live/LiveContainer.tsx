import styled from '@emotion/styled';
import { Modal, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../common/Button';
import { GetAvailableAuctionListResponseData } from '../../apis/auction/auctionAPIService.types';

const LiveContainer = ({ auctionData }: { auctionData: GetAvailableAuctionListResponseData }) => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOk = () => {
		navigate(
			{ pathname: '/etc/live/register' },
			{ state: { auctionId: auctionData.auctionId, title: auctionData.title } },
		);
		setIsModalOpen(false);
		console.log(isModalOpen);
	};

	return (
		<>
			<Card
				title={auctionData.title}
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
				onClick={showModal}
			>
				<p>현재 참여 팀 수</p>
				<p>
					{auctionData.currentParticipants} / {auctionData.maxParticipants} 팀
				</p>
				<Button content="신청하기" Key="applyAuction" />
			</Card>
			<Modal
				title="전통주. 라이브 경매 신청 유의사항"
				open={isModalOpen}
				destroyOnClose
				onOk={handleOk}
				onCancel={handleCancel}
				maskClosable={false}
				footer={[
					<Button handleClick={handleCancel} content="취소" btntype="cancel" Key="CancelRegisterLive" />,
					<Button handleClick={handleOk} content="신청" btntype="positive" Key="RegisterLive" />,
				]}
			>
				<p>아래 유의사항을 꼭 읽어주세요.</p>
				<p>1. 라이브 경매에 참여시 라이브 경매는 전통주. 본사에서 진행돼요.</p>
				<p>2. 라이브 경매 승인은 2-3일 정도 소요돼요.</p>
				<p>3. 라이브 경매 수익은 정산시에 같이 정산돼요.</p>
				<p>4. 라이브 경매는 하나의 물품에 대해서만 신청 가능해요.</p>
				<p>5. 기타 문의 사항은 전통주.으로 문의 부탁드려요.</p>
			</Modal>
		</>
	);
};
export default LiveContainer;

const StyledLiveContainer = styled.div`
	cursor: pointer;
	border-radius: 12px;
	background-color: var(--primary-violet);
	padding: 2rem;
	color: white;
	text-align: center;
	div {
		display: flex;
		align-items: center;
		gap: 2rem;
		justify-content: center;
	}
`;

const StyledCardHeader = styled.div`
	background-color: var(--primary-violet);
`;
