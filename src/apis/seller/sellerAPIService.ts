import APIService from "../../libs/core/api/APIService";
import {
  EmailCheckResponse,
  SignUpParams,
  SignUpResponse,
} from "./sellerAPIService.types";

const BASE_URL = `${process.env.REACT_APP_API_URL}/seller-service/api`;

class SellerAPIService extends APIService {
  constructor() {
    super();
    this.setBaseUrl(BASE_URL);
  }

  async signUp(params: SignUpParams) {
    const { data } = await this.post<SignUpResponse>("/sign-up", params);
    return data;
  }

  async emailCheck(email: string) {
    const { data } = await this.post<EmailCheckResponse>(
      "/sign-up/email/auth",
      { email },
    );
    return data;
  }
}

export const sellerApi: SellerAPIService = SellerAPIService.shared();
