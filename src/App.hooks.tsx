import { useRef, useEffect } from 'react';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { createQueryClient } from './libs/core/react-query/core';
import { FirebaseApp } from './firebase';
import useFcmToken from './libs/core/utils/hooks/useFcmToken';

// const FCM = async () => {
// 	const messaging = getMessaging(FirebaseApp);
// 	await Notification.requestPermission().then(async (permission) => {
// 		if (permission === 'granted') {
// 			console.log('Notification permission granted.');
// 			const currentToken = await getToken(messaging, {
// 				vapidKey: 'BGbg4JO9g6cuz-h7WYhIduveZuXRHX9HSXvu0gylq-FEhNTkt58kVYhp6skOd1ZbfmPTRddiZHK0m9FtZ4JS0wo',
// 			});
// 			if (currentToken) {
// 				console.log('ho');
// 			}
// 		}
// 	});
// };

export const FCM = () => {
	const { fcmToken } = useFcmToken();
	// Use the token as needed
	/* eslint-disable no-unused-expressions */
	fcmToken && console.log('FCM token:', fcmToken);

	useEffect(() => {
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			const messaging = getMessaging(FirebaseApp);
			const unsubscribe = onMessage(messaging, (payload) => {
				console.log('Foreground push notification received:', payload);
				// Handle the received push notification while the app is in the foreground
				// You can display a notification or update the UI based on the payload
			});
			return () => {
				unsubscribe(); // Unsubscribe from the onMessage event
			};
		}
	}, []);
};
export const useAppMount = () => {
	const queryClientRef = useRef(createQueryClient());
	const firebaseMessaging = getMessaging(FirebaseApp);
	FCM();
	// firebaseMessaging
	// 	.requestPermission()
	// 	.then(() => {
	// 		return firebaseMessaging(); // 등록 토큰 받기
	// 	})
	// 	.then(function (token) {
	// 		console.log(token); // 토큰 출력
	// 	})
	// 	.catch(function (error) {
	// 		console.log('FCM Error : ', error);
	// 	});
	return {
		queryClientRef,
		useAppMount,
	};
};
