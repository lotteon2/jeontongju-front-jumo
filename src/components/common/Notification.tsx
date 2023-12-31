import { useEffect, useState } from 'react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import styled from '@emotion/styled';
import FiSrBellSVG from '../../assets/images/fi-sr-bell.svg';
import NewFiSrBellSVG from '../../assets/images/fi-sr-new-bell.svg';
import { Toast } from './Toast';
import { notiApi } from '../../apis/notification/notificationAPIService';
import { NOTI, translateNoti } from '../../constants/NOTIEnum';

const Notification = () => {
	const [newNoti, setNewNoti] = useState<{ notificationId: number; data: keyof typeof NOTI; redirectUrl: string }[]>(
		[],
	);
	const [notiOpen, setNotiOpen] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const accessToken = localStorage.getItem('accessToken');
			if (!accessToken) return;

			const EventSource = EventSourcePolyfill || NativeEventSource;
			const eventSource = new EventSource(
				'https://jeontongju-dev.shop/notification-service/api/notifications/connect',
				{
					headers: {
						Authorization: `${accessToken}`,
						Connection: 'keep-alive',
						Accept: 'text/event-stream',
					},
					heartbeatTimeout: 86400000,
					withCredentials: true,
				},
			);

			eventSource.onopen = () => {
				console.log('OPEN');

				eventSource.removeEventListener('connect', () => {
					console.log('remove connect');
				});
				eventSource.removeEventListener('happy', () => {
					console.log('remove happy');
				});

				eventSource.addEventListener('happy', (event: any) => {
					console.log(event);
					const currNoti = event.data;
					setNewNoti((prev) => [...prev, JSON.parse(currNoti)]);
				});

				eventSource.addEventListener('connect', (event: any) => {
					const currNoti = event.data;
					if (JSON.parse(currNoti).notificationId !== null) {
						setNewNoti((prev) => [JSON.parse(currNoti)]);
					}
					console.log(event);
					console.log('SSE CONNECTED');
				});
			};

			/* eslint-disable consistent-return */
			return () => {
				eventSource.close();
				console.log('SSE CLOSED');
			};
		}
	}, []);

	const handleOpenNoti = () => {
		setNotiOpen((prev: boolean) => !prev);
	};

	const handleAllRead = async () => {
		try {
			const data = await notiApi.readAllNoti();
			if (data.code === 200) {
				Toast(true, '전체 읽음 처리에 성공했어요.');
				setNewNoti([]);
			}
		} catch (error) {
			Toast(false, '전체 읽음 처리에 실패했어요');
		}
	};

	const handleReadByNotiId = async (id: number, url: string) => {
		try {
			const data = await notiApi.readNotiByNotiId(id);
			if (data.code === 200) {
				Toast(true, '읽음 처리에 성공했어요.');
				setNewNoti([]);
			}
		} catch (error) {
			Toast(false, '읽음 처리에 실패했어요');
		}
	};

	return (
		<div>
			<img
				alt="bell"
				width={0}
				height={0}
				src={newNoti.length > 0 ? NewFiSrBellSVG : FiSrBellSVG}
				style={{
					cursor: 'pointer',
					width: '2rem',
					height: '2rem',
					position: 'relative',
				}}
				onClick={handleOpenNoti}
				role="presentation"
			/>

			{notiOpen &&
				(newNoti.length === 0 ? (
					<StyledAlarmBox>알람 확인 완료 끝!</StyledAlarmBox>
				) : (
					<StyledAlarmBox>
						<StyledReadButton role="presentation" onClick={handleAllRead}>
							전체 읽음
						</StyledReadButton>
						{newNoti.map((it, i: number) => (
							<StyledAlarmDiv key={i} onClick={() => handleReadByNotiId(it.notificationId, it.redirectUrl)}>
								{translateNoti(it.data)}
							</StyledAlarmDiv>
						))}
					</StyledAlarmBox>
				))}
		</div>
	);
};

export default Notification;

const StyledAlarmBox = styled.div`
	border: 1px solid #ccc;
	padding: 1rem 2rem;
	border-radius: 12px;
	position: absolute;
	z-index: 100;
	background-color: white;
	max-height: 10rem;
	overflow-y: scroll;
`;

const StyledAlarmDiv = styled.div`
	padding: 0.5rem 0;
`;

const StyledReadButton = styled.div`
	text-align: right;
	margin-bottom: 0.5rem;
	cursor: pointer;
`;
