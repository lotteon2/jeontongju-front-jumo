import APIService from '../../libs/core/api/APIService';
import {
	ConfirmDeliveryResponse,
	GetMyCashUpImageResponse,
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

	async getMyOrderList(
		page: number,
		size: number,
		isDeliveryCodeNull: boolean,
		productId: string,
		startDate: string,
		endDate: string,
		orderState: string,
	) {
		const { data } = await this.get<GetMyOrderListResponse>(
			`/order/seller?page=${page}&size=${size}&isDeliveryCodeNull=${isDeliveryCodeNull}&productId=${productId}&startDate=${startDate}&endDate=${endDate}&productStatus=${orderState}`,
		);
		return data;
	}

	async registerDeliveryCode(deliveryId: number, params: RegisterDeliveryCodeParams) {
		const { data } = await this.patch<RegisterDeliveryCodeResponse>(`/delivery/${deliveryId}`, params);
		return data;
	}

	async confirmDelivery(deliveryId: number) {
		const { data } = await this.patch<ConfirmDeliveryResponse>(`/delivery-confirm/${deliveryId}`);
		return data;
	}

	async getMyCashUpImage(year: string, month: string) {
		const { data } = await this.get<GetMyCashUpImageResponse>(`/settlement/seller/year/${year}/month/${month}`);
		return data;
	}
}

export const orderApi: OrderAPIService = OrderAPIService.shared();
