export interface RegisterUserEntity {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserRequest {
  user: RegisterUserEntity;
}
