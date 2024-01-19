import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import './common.scss';
import { getMessaging, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import Loading from './components/common/Loading';
import { useAppMount } from './App.hooks';
import router from './routes';
import 'antd/dist/reset.css';
import useFcmToken from './libs/core/utils/hooks/useFcmToken';
import { FirebaseApp } from './firebase';

function App() {
	const { queryClientRef } = useAppMount();
	// const { fcmToken, notificationPermissionStatus } = useFcmToken();
	// // Use the token as needed
	// /* eslint-disable no-unused-expressions */
	// fcmToken && console.log('FCM token:', fcmToken);

	// /* eslint-disabled consistent-return */
	// useEffect(() => {
	// 	if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
	// 		const messaging = getMessaging(FirebaseApp);
	// 		const unsubscribe = onMessage(messaging, (payload) => {
	// 			console.log('Foreground push notification received:', payload);
	// 			// Handle the received push notification while the app is in the foreground
	// 			// You can display a notification or update the UI based on the payload
	// 		});
	// 		return () => {
	// 			unsubscribe(); // Unsubscribe from the onMessage event
	// 		};
	// 	}
	// }, []);

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<RouterProvider router={router} fallbackElement={<Loading />} />
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
}

export default App;
