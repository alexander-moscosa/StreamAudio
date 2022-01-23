import axios from "axios";
import { GetUserProps } from "../interfaces/interfaces";

export const getTwitchUserRequest = async (
  config: GetUserProps,
  setGetTwitchUser: any
) => {
  try {
    const { data } = await axios.get(
      "https://api.twitch.tv/helix/users",
      config
    );

    setGetTwitchUser({
      ok: true,
      data: data.data,
    });
    return;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      setGetTwitchUser({
        ok: false,
        data: err.message
      });
    }
    return;
  }
};
1