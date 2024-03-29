import APIService from '../../libs/core/api/APIService';
import {
	CheckMyPasswordResponse,
	EmailCheckResponse,
	LoginParams,
	LoginResponse,
	SignUpParams,
	SignUpResponse,
	UpdateMyPasswordParams,
	UpdateMyPasswordResponse,
	CheckMyEmailResponse,
	UpdateMyPasswordBeforeLoginResponse,
	RefreshResponse,
} from './authAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/authentication-service/api`;

/* eslint-disable no-useless-escape */
export function getCookieForRefresh() {
	function escape(s) {
		return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1');
	}
	const match = document.cookie.match(RegExp(`(?:^|;\\s*)${escape('refreshToken')}=([^;]*)`));
	return match ? match[1] : null;
}

class AuthAPIService extends APIService {
	constructor() {
		super();
		this.setBaseUrl(BASE_URL);
	}

	async login(params: LoginParams) {
		const { data } = await this.post<LoginResponse>('/sign-in', { ...params, memberRole: 'ROLE_SELLER' });
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

	/* 로그인 후 비밀번호 재설정 */
	async updateMyPassword(password: string) {
		const { data } = await this.patch<UpdateMyPasswordResponse>('/password/change', { newPassword: password });
		return data;
	}

	async checkMyPassword(password: string) {
		const { data } = await this.post<CheckMyPasswordResponse>('/password/auth', { originalPassword: password });
		return data;
	}

	/* 로그인 전 비밀번호 찾기시 이메일 인증 단계 */
	async checkMyEmail(email: string) {
		const { data } = await this.post<CheckMyEmailResponse>('/email/auth', { email, memberRole: 'ROLE_SELLER' });
		return data;
	}

	/* 로그인 전 비밀번호 재설정 */
	async updateMyPasswordBeforeLogin(params: UpdateMyPasswordParams) {
		const { data } = await this.patch<UpdateMyPasswordBeforeLoginResponse>('/password', params);
		return data;
	}

	async refresh() {
		const { data } = await this.put<RefreshResponse>('/access-token', { cookie: getCookieForRefresh() });
		return data;
	}
}

export const authApi: AuthAPIService = AuthAPIService.shared();
