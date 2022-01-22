import { LoginTwitchProps } from "../interfaces/interfaces";

export const LoginTwitch = ( { client_id, redirect_uri, scope }: LoginTwitchProps ) => {
  return (
    <div className="loginTwitch">
      <div className="twitchButton">
        <a
          href={`https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=${ client_id }&redirect_uri=${ redirect_uri }&scope=${ scope.join(' ') }`}
        >
          Iniciar Sesión con Twitch
        </a>
      </div>
    </div>
  );
};
