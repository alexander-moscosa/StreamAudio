import axios from 'axios';
import { Dispatch, useCallback, useEffect } from 'react';
import {
  GetUserProps,
  twitchUserState,
} from '../modules/logging-in/interfaces/interfaces';

function getConfig(accessToken: string): GetUserProps {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Client-Id': 'b5g4ef9i6y2pkk7hx6591ggva34hqr',
  };

  return { headers };
}

function getAccessToken(hash: string) {
  const params = new URLSearchParams(hash.replace('#', '?'));
  const token = params.get('access_token');

  return token;
}

export function useTwitchUser(dispatch: Dispatch<twitchUserState>) {
  const registerTwitchUser = useCallback(
    async (config: GetUserProps) => {
      try {
        const response = await axios.get(
          'https://api.twitch.tv/helix/users',
          config,
        );

        dispatch({
          ok: true,
          data: response.data.data[0],
        });
      } catch (error) {
        if (axios.isAxiosError(error))
          dispatch({
            ok: false,
            errorMessage: error.message,
            data: null,
          });
      }
    },
    [dispatch],
  );

  useEffect(() => {
    const config = getConfig(getAccessToken(window.location.hash) || '');
    registerTwitchUser(config);
  }, [registerTwitchUser]);
}
