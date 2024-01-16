import APIService from '../../libs/core/api/APIService';
import { ReadAllNotiResponse, ReadNotiByNotiIdResponse } from './notificationAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}`;

class NotificationAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async readAllNoti() {
		const { data } = await this.patch<ReadAllNotiResponse>(`/notification-service/api/notifications`);
		return data;
	}

	async readNotiByNotiId(notificationId: number) {
		const { data } = await this.get<ReadNotiByNotiIdResponse>(
			`/notification-service/api/notifications/${notificationId}/to`,
		);
		return data;
	}
}
export const notiApi: NotificationAPIService = NotificationAPIService.shared();
