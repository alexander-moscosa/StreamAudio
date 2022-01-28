import {
  StateActions,
  useSteamAudioContext,
} from '../../../context/SteamAudioContext';
import { LoginTwitchProps } from '../interfaces/interfaces';

export const LoginTwitch = ({
  client_id,
  redirect_uri,
  scope,
}: LoginTwitchProps) => {
  const { dispatch } = useSteamAudioContext();

  const handleButtonClick = () => {
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&scope=${scope.join(
      ' ',
    )}`;

    dispatch({
      type: StateActions.LOGGING_IN,
      payload: {
        value: true,
      },
    });
  };

  return (
    <div className="loginTwitch">
      <button onClick={handleButtonClick} className="twitchButton">
        Iniciar Sesión con Twitch
      </button>
    </div>
  );
};
