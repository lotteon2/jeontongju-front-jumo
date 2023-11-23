import { SNACK } from "../../constants/ProductType/SnackType";

interface ApiResponse<T> {
  code: number;
  message: string;
  detail?: string;
  data: T;
}

export interface RegisterProductParams {
  productName: string;
  productDescription: string;
  productThumbnailImageUrl: string;
  productAlcoholDegree: number;
  productCapacity: number;
  breweryName: string;
  breweryZonecode: string;
  breweryAddress: string;
  breweryAddressDetails: string;
  manufacturer: string;
  productPrice: number;
  registeredQuantity: number;
  productDetailsImageUrl: string;
  categoryId: number;
  taste: {
    sour: 4;
    sweet: 2;
    scent: 1;
    carbonation: 4;
    body: 1;
  };
  rawMaterial: ["RICE"];
  food: (typeof SNACK)[];
  concept: ["CAMPING"];
}

export type RegisterProductResponse = ApiResponse<string>;
