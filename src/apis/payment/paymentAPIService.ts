import APIService from '../../libs/core/api/APIService';
import { GetMyCashUpImageResponse } from './paymentAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/payment-service/api`;

class PaymentAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async getMyCashUpImage(year: string, month: string) {
		const { data } = await this.get<GetMyCashUpImageResponse>(`/settlement/seller/year/${year}/month/${month}}`);
		return data;
	}
}

export const paymentApi: PaymentAPIService = PaymentAPIService.shared();
