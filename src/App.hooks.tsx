import { useRef, useEffect } from 'react';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { createQueryClient } from './libs/core/react-query/core';
import { FirebaseApp } from './firebase';
import useFcmToken from './libs/core/utils/hooks/useFcmToken';

export const FCM = () => {
	const { fcmToken } = useFcmToken();
	// Use the token as needed
	/* eslint-disable no-unused-expressions */

	useEffect(() => {
		if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
			const messaging = getMessaging(FirebaseApp);
			const unsubscribe = onMessage(messaging, (payload) => {
				console.log('Foreground push notification received:', payload);
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
