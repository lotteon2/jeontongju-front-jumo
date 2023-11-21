import APIService from "../../libs/core/api/APIService";
import { LoginParams, LoginResponse } from "./authAPIService.types";

const BASE_URL = `${process.env.REACT_APP_API_URL}/authentication-service/api`;

class AuthAPIService extends APIService {
  constructor() {
    super();
    this.setBaseUrl(BASE_URL);
  }

  async login(params: LoginParams) {
    const { data } = await this.post<LoginResponse>("/log-in", params);
    return data;
  }
}

export const authApi: AuthAPIService = AuthAPIService.shared();
