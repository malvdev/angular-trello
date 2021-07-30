export interface ForgotUserEntity {
  email: string;
}

export interface ForgotUserRequest {
  user: ForgotUserEntity;
}

export interface ForgotUserResponse {
  status: boolean;
}
