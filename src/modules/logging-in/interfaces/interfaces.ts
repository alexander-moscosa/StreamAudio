export interface GetUserProps {
  headers: {
    'Client-Id': string;
    Authorization: string;
  };
}

export interface UserTwitchData {
  broadcaster_type: string;
  created_at: Date;
  description: string;
  display_name: string;
  email: string;
  id: string;
  login: string;
  offline_image_url: string;
  profile_image_url: string;
  type: string;
  view_count: number;
}

export interface twitchUserState {
  ok: boolean;
  data: UserTwitchData | null;
  errorMessage?: string | null;
}
