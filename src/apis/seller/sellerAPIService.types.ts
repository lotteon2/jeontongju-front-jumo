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

export type EmailCheckResponse = ApiResponse<{ authCode: string }>;

export type SignUpResponse = ApiResponse<string>;
