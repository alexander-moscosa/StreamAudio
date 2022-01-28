import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  twitchUserState,
  UserTwitchData,
} from '../modules/logging-in/interfaces/interfaces';

async function doFetch<T>(type: 'login' | 'register', data: T) {
  try {
    const response = await axios.post(
      `http://localhost:9090/api/v1/user/${type}`,
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    }
  }
}

export function useHandleRequest(userState: twitchUserState) {
  const [response, setResponse] = useState<any>(null);

  const handleLoggingIn = (isRegistered: boolean, data: UserTwitchData) => {
    const { email, login, id } = data;

    const type = isRegistered ? 'login' : 'register';

    return () => {
      doFetch(type, { email, username: login, twitch_id: id }).then((resp) => {
        console.log(resp);
        setResponse(resp);
      });
    };
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/v1/user/${userState.data?.login}`)
      .then(({ data }) => {
        console.log(data);
        // setIsRegistered(true);
      })
      .catch((err) => {
        if (axios.isAxiosError(err)) {
          console.log(err);
          // setIsRegistered(false);
        }
      });
  }, [userState]);

  return {
    response,
    handleLoggingIn,
  };
}
