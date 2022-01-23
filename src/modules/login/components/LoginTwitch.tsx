import { LoginTwitchProps } from "../interfaces/interfaces";

export const LoginTwitch = ( { client_id, redirect_uri, scope }: LoginTwitchProps ) => {
  return (
    <div className="loginTwitch">
      <div className="twitchButton">
        <a
          href={`https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&scope=${ scope.join(' ') }`}
        >
          Iniciar Sesión con Twitch
        </a>
      </div>
    </div>
  );
};
