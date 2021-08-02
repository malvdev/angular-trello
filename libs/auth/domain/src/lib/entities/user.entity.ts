export type UserID = string;

export interface UserEntity {
  id: UserID;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  avatar?: string;
}

export interface UserResponse {
  user: UserEntity;
}
