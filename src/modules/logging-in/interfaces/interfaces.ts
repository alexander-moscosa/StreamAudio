export interface GetUserProps {
  headers: {
    "Client-Id": string;
    Authorization: string;
  };
}

export interface twitchUserState {
  ok: boolean;
  data: any
}
