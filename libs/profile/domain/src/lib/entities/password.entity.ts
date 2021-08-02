export interface PasswordEntity {
  password: string;
  passwordNew: string;
}

export interface PasswordResponse {
  status: boolean;
}

export interface UpdatePasswordRequest {
  password: string;
  passwordNew: string;
}
