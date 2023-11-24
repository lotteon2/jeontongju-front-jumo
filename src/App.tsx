import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useEffect } from 'react';
import './App.css';
import './common.scss';
import Loading from './components/common/Loading';
import { useAppMount } from './App.hooks';
import router from './routes';
import 'antd/dist/reset.css';
import { useMyInfoStore } from './stores/MyInfo/MyInfoStore';
import { useGetMyInfoQuery } from './queries/useGetMyInfoQuery';

function App() {
	const { queryClientRef } = useAppMount();

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<RouterProvider router={router} fallbackElement={<Loading />} />
			<ReactQueryDevtools initialIsOpen />
		</QueryClientProvider>
	);
}

export default App;
