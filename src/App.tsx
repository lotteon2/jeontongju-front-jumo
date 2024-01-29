import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import './common.scss';
import Loading from './components/common/Loading';
import { useAppMount } from './App.hooks';
import router from './routes';
import 'antd/dist/reset.css';

function App() {
	const { queryClientRef, FCM } = useAppMount();
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker
			.register('../firebase-messaging-sw.js')
			.then(function (registration) {
				console.log('Registration successful, scope is:', registration.scope);
			})
			.catch(function (err) {
				console.log('Service worker registration failed, error:', err);
			});
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<RouterProvider router={router} fallbackElement={<Loading />} />
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
}

export default App;
