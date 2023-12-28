import APIService from '../../libs/core/api/APIService';
import { ReadAllNotiResponse } from './notificationAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/order-service/api`;

class NotificationAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async readAllNoti() {
		const { data } = await this.patch<ReadAllNotiResponse>(`/notification-service/api/notifications`);
		return data;
	}
}
export const notiApi: NotificationAPIService = NotificationAPIService.shared();
