import React, { useEffect, useRef, useState } from 'react';
import { EventSourcePolyfill, NativeEventSource } from 'event-source-polyfill';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import FiSrBellSVG from '../../assets/images/fi-sr-bell.svg';
import NewFiSrBellSVG from '../../assets/images/fi-sr-new-bell.svg';
import { Toast } from './Toast';
import { notiApi } from '../../apis/notification/notificationAPIService';
import { NOTI, translateNoti } from '../../constants/NOTIEnum';
import sound from '../../assets/audio/jum.mp3';

export default function CustomNotification() {
	const navigate = useNavigate();
	const notiRef = useRef(null);
	const [newNoti, setNewNoti] = useState<{ notificationId: number; data: keyof typeof NOTI; redirectUrl: string }[]>(
		[],
	);
	const [notiOpen, setNotiOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (notiRef.current && !notiRef.current.contains(event.target)) {
				setNotiOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const accessToken = localStorage.getItem('accessToken');
			if (!accessToken) return;

			const EventSource = EventSourcePolyfill || NativeEventSource;
			const eventSource = new EventSource(
				'https://api.jeontongju.shop/notification-service/api/notifications/connect',
				{
					headers: {
						Authorization: `${accessToken}`,
						Connection: 'keep-alive',
						Accept: 'text/event-stream',
					},
					heartbeatTimeout: 3000,
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
					new Notification('전통주점', {
						badge:
							'https://github.com/lotteon2/jeontongju-front-consumer/assets/72402747/0c2d1ad9-36bf-4024-93d8-434617c5791e',
						icon: 'https://github.com/lotteon2/jeontongju-front-consumer/assets/72402747/0c2d1ad9-36bf-4024-93d8-434617c5791e',
						body: '재고 소진 알림',
					});
					new Audio(sound).play();
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

	async function handleReadByNotiId(id: number, url: string) {
		try {
			const data = await notiApi.readNotiByNotiId(id);
			if (data.code === 200) {
				Toast(true, '읽음 처리에 성공했어요.');
				new Notification('전통주점', {
					badge:
						'https://github.com/lotteon2/jeontongju-front-consumer/assets/72402747/0c2d1ad9-36bf-4024-93d8-434617c5791e',
					icon: 'https://github.com/lotteon2/jeontongju-front-consumer/assets/72402747/0c2d1ad9-36bf-4024-93d8-434617c5791e',
					body: '냥',
				});
				navigate(url.replace('https://seller.jeontongju.shop', ''));
				setNewNoti([]);
			}
		} catch (error) {
			Toast(false, '읽음 처리에 실패했어요');
		}
	}

	return (
		<div ref={notiRef}>
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
}

// export default React.memo(Notification);

const StyledAlarmBox = styled.div`
	border: 1px solid #ccc;
	padding: 1rem 2rem;
	border-radius: 12px;
	position: absolute;
	z-index: 100;
	background-color: white;
	max-height: 20rem;
	width: 20rem;
	overflow-y: scroll;
	min-height: 20rem;
	height: 20rem;
`;

const StyledAlarmDiv = styled.div`
	padding: 0.5rem 0;
	cursor: pointer;
`;

const StyledReadButton = styled.div`
	text-align: right;
	margin-bottom: 0.5rem;
	cursor: pointer;
`;
