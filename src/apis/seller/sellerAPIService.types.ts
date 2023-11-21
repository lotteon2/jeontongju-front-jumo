interface ApiResponse<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  detail?: string;
  data: T;
}

export interface SignUpParams {
  email: string;
  password: string;
  storeName: string;
  storeDescription: string;
  storeImageUrl: string;
  storePhoneNumber: string;
  businessLicenseDocumentsUrl: string;
  imp_uid: string;
}

export interface UpdateMyInfoParams {
  storeName?: string;
  storeDescription?: string;
  storeImageUrl?: string;
  storePhoneNUmber?: string;
}

export type EmailCheckResponse = ApiResponse<{ authCode: string }>;

export type SignUpResponse = ApiResponse<string>;

export type WithDrawResponse = ApiResponse<string>;

export type UpdateMyInfoResponse = ApiResponse<string>;

export type CheckMyPasswordResponse = ApiResponse<string>;

export type UpdateMyPasswordResponse = ApiResponse<string>;
