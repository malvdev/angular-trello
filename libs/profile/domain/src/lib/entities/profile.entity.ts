export interface ProfileEntity {
  username: string;
  email: string;
  password?: string;
  avatar?: string;
}

export interface ProfileResponse {
  profile: ProfileEntity;
}

export interface UpdateProfileRequest {
  profile: ProfileEntity;
}
