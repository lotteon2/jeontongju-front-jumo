import APIService from '../../libs/core/api/APIService';
import { EmailCheckResponse, LoginParams, LoginResponse, SignUpParams, SignUpResponse } from './authAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/authentication-service/api`;

class AuthAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async login(params: LoginParams) {
		const { data } = await this.post<LoginResponse>('/sign-in', params);
		return data;
	}

	async signUp(params: SignUpParams) {
		const { data } = await this.post<SignUpResponse>('/sellers/sign-up', params);
		return data;
	}

	async emailCheck(email: string) {
		const { data } = await this.post<EmailCheckResponse>('/sign-up/email/auth', { email, memberRole: 'ROLE_SELLER' });
		return data;
	}
}

export const authApi: AuthAPIService = AuthAPIService.shared();
