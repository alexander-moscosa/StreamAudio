import { LoginTwitchProps } from '../interfaces/interfaces';

export const LoginTwitch = ({
  client_id,
  redirect_uri,
  scope,
}: LoginTwitchProps) => {
  const handleButtonClick = () => {
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope.join(
      ' ',
    )}`;

    sessionStorage.setItem('meta', JSON.stringify({
      loggingIn: true,
    }));
  };

  return (
    <div className="loginTwitch">
      <div className="twitchButton">
        <button onClick={handleButtonClick}>Iniciar Sesión con Twitch</button>
      </div>
    </div>
  );
};
