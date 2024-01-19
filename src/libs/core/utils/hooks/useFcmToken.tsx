import { useEffect, useState } from 'react';
import { getMessaging, getToken } from 'firebase/messaging';
import { FirebaseApp } from '../../../../firebase';

const useFcmToken = () => {
	const [token, setToken] = useState('');
	const [notificationPermissionStatus, setNotificationPermissionStatus] = useState('');

	useEffect(() => {
		const retrieveToken = async () => {
			try {
				if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
					const messaging = getMessaging(FirebaseApp);

					const initialPermission = Notification.permission;
					setNotificationPermissionStatus(initialPermission);

					if (initialPermission === 'default') {
						const permission = await Notification.requestPermission();
						setNotificationPermissionStatus(permission);
					}

					if (notificationPermissionStatus === 'granted') {
						const currentToken = await getToken(messaging, {
							vapidKey: 'BGbg4JO9g6cuz-h7WYhIduveZuXRHX9HSXvu0gylq-FEhNTkt58kVYhp6skOd1ZbfmPTRddiZHK0m9FtZ4JS0wo',
						});
						if (currentToken) {
							setToken(currentToken);
						} else {
							console.log('No registration token available. Request permission to generate one.');
						}
					}
				}
			} catch (error) {
				console.error('An error occurred while retrieving token:', error);
			}
		};

		retrieveToken();
	}, [notificationPermissionStatus]);

	return { fcmToken: token, notificationPermissionStatus };
};

export default useFcmToken;
