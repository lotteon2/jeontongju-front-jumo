import styled from '@emotion/styled';
import { Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../common/Button';

const LiveContainer = ({ id, title }: { id: number; title: string }) => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOk = () => {
		navigate('/etc/live/register');
		setIsModalOpen(false);
		console.log(isModalOpen);
	};

	return (
		<>
			<StyledLiveContainer onClick={showModal}>
				<div>
					<h2>{title}</h2>
					<h3>참여주모: 3 / 5 팀</h3>
				</div>
				<span>신청하기</span>
			</StyledLiveContainer>
			<Modal
				title="경매 신청하기"
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
				<div>대충 유의사항</div>
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
