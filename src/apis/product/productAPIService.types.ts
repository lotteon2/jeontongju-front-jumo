import { CONCEPT } from '../../constants/ProductType/ConceptType';
import { RAW_MATERIAL } from '../../constants/ProductType/MaterialType';
import { SNACK } from '../../constants/ProductType/SnackType';

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
  breweryAddressDetails?: string;
  manufacturer: string;
  productPrice: number;
  registeredQuantity: number;
  productDetailsImageUrl: string;
  categoryId: number;
  taste?: {
    sour: 4;
    sweet: 2;
    scent: 1;
    carbonation: 4;
    body: 1;
  };
  rawMaterial?: (keyof typeof RAW_MATERIAL)[];
  food?: (typeof SNACK)[];
  concept?: (keyof typeof CONCEPT)[];
}

export type RegisterProductResponse = ApiResponse<string>;
