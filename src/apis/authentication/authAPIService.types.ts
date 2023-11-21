interface ApiResponse<T> {
  isSuccess: boolean;
  code: number;
  message: string;
  detail?: string;
  data: T;
}

export interface LoginParams {
  email: string;
  password: string;
}

export type LoginResponse = ApiResponse<string>;
