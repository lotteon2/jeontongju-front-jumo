import APIService from '../../libs/core/api/APIService';
import {
  CheckMyPasswordResponse,
  EmailCheckResponse,
  GetMyInfoResponse,
  SignUpParams,
  SignUpResponse,
  UpdateMyInfoParams,
  UpdateMyInfoResponse,
  UpdateMyPasswordResponse,
  WithDrawResponse,
} from './sellerAPIService.types';

const BASE_URL = `${process.env.REACT_APP_API_URL}/seller-service/api`;

class SellerAPIService extends APIService {
  constructor() {
    super();
    this.setBaseUrl(BASE_URL);
  }

  async signUp(params: SignUpParams) {
    const { data } = await this.post<SignUpResponse>('/sign-up', params);
    return data;
  }

  async emailCheck(email: string) {
    const { data } = await this.post<EmailCheckResponse>(
      '/sign-up/email/auth',
      { email },
    );
    return data;
  }

  async withdraw() {
    const { data } = await this.delete<WithDrawResponse>('/sellers');
    return data;
  }

  async updateMyInfo(params: UpdateMyInfoParams) {
    const { data } = await this.patch<UpdateMyInfoResponse>('/sellers', params);
    return data;
  }

  async checkMyPassword(password: string) {
    const { data } = await this.post<CheckMyPasswordResponse>(
      '/sellers/password/auth',
      { originalPassword: password },
    );
    return data;
  }

  async updateMyPassword(password: string) {
    const { data } = await this.patch<UpdateMyPasswordResponse>(
      '/sellers/password',
      { newPassword: password },
    );
    return data;
  }

  async getMyInfo() {
    const { data } = await this.get<GetMyInfoResponse>('/sellers/info');
    return data;
  }
}

export const sellerApi: SellerAPIService = SellerAPIService.shared();
