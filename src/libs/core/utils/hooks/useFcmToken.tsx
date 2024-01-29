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
					if ('serviceWorker' in navigator) {
						navigator.serviceWorker
							.register('../../../../firebase-messaging-sw.js')
							.then(function (registration) {
								console.log('Registration successful, scope is:', registration.scope);
							})
							.catch(function (err) {
								console.log('Service worker registration failed, error:', err);
							});
					}
					const messaging = getMessaging(FirebaseApp);

					const initialPermission = Notification.permission;
					setNotificationPermissionStatus(initialPermission);

					if (initialPermission === 'default') {
						const permission = await Notification.requestPermission();
						setNotificationPermissionStatus(permission);
					}

					if (notificationPermissionStatus === 'granted') {
						if (localStorage.getItem('fcmToken')) {
							return;
						}
						const currentToken = await getToken(messaging, {
							vapidKey: 'BGbg4JO9g6cuz-h7WYhIduveZuXRHX9HSXvu0gylq-FEhNTkt58kVYhp6skOd1ZbfmPTRddiZHK0m9FtZ4JS0wo',
						});
						if (currentToken) {
							setToken(currentToken);
							localStorage.setItem('fcmToken', currentToken);
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
