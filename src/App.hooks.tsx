import { useRef, useEffect } from 'react';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { createQueryClient } from './libs/core/react-query/core';
import { FirebaseApp } from './firebase';
import useFcmToken from './libs/core/utils/hooks/useFcmToken';

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
	return {
		queryClientRef,
		useAppMount,
		FCM,
	};
};
