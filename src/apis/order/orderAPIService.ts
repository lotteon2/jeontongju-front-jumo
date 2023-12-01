import APIService from '../../libs/core/api/APIService';
import {
	GetMyOrderListResponse,
	RegisterDeliveryCodeParams,
	RegisterDeliveryCodeResponse,
} from './orderAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/order-service/api`;

class OrderAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async getMyOrderList(page: number, size: number, isDeliveryCodeNull: boolean, productId: string, orderDate: string) {
		const { data } = await this.get<GetMyOrderListResponse>(
			`/order/seller?page=${page}&size=${size}&isDeliveryCodeNull=${isDeliveryCodeNull}&productId=${productId}&orderDate=${orderDate}`,
		);
		return data;
	}

	async registerDeliveryCode(deliveryId: number, params: RegisterDeliveryCodeParams) {
		const { data } = await this.patch<RegisterDeliveryCodeResponse>(`/delivery/${deliveryId}`, params);
		return data;
	}
}

export const orderApi: OrderAPIService = OrderAPIService.shared();
