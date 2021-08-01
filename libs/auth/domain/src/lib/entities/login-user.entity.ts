export interface LoginUserEntity {
  email: string;
  password: string;
  remember?: boolean;
}

export interface LoginUserRequest {
  user: LoginUserEntity;
}
