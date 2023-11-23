import APIService from "../../libs/core/api/APIService";
import {
  RegisterProductParams,
  RegisterProductResponse,
} from "./productAPIService.types";

const BASE_URL = `${process.env.REACT_APP_API_URL}/product-service/api`;

class ProductAPIService extends APIService {
  constructor() {
    super();
    this.setBaseUrl(BASE_URL);
  }

  async registerProduct(params: RegisterProductParams) {
    const { data } = await this.post<RegisterProductResponse>(
      "/products",
      params,
    );
    return data;
  }
}

export const productApi: ProductAPIService = ProductAPIService.shared();
