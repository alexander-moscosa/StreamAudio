import { GetUserProps, twitchUserState } from '../interfaces/interfaces';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { EmailButton } from '../componets/EmailButton';

const initial_state: twitchUserState = {
  ok: false,
  data: null,
  errorMessage: null,
};

const reducer = (state: twitchUserState, action: twitchUserState) => {
  switch (action.ok) {
    case true:
      return {
        ok: action.ok,
        data: action.data,
      };
    case false:
      return {
        ok: action.ok,
        data: action.data,
      };
    default:
      return state;
  }
};

export const Logging_in = () => {
  const [twitchUserState, twitchUserDispatch] = useReducer(
    reducer,
    initial_state,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace('#', '?'));
    const token = params.get('access_token');

    const config: GetUserProps = {
      headers: {
        Authorization: `Bearer ${token}` || '',
        'Client-Id': 'b5g4ef9i6y2pkk7hx6591ggva34hqr',
      },
    };
    try {
      axios
        .get('https://api.twitch.tv/helix/users', config)
        .then(({ data }) => {
          twitchUserDispatch({ ok: true, data: data.data[0] });
        });
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        twitchUserDispatch({
          ok: false,
          errorMessage: err.message,
          data: null,
        });
      }
    }
  }, []);

  return (
    <div className="logging_in_content">
      <div className="logging_in_card">
        {twitchUserState.ok && twitchUserState.data ? (
          <>
            <div className="logging_in_title">
              <h1>¡Iniciando Sesión!</h1>
            </div>
            <div className="logging_in_body">
              <div className="logging_in_introduction">
                <img
                  src={twitchUserState.data.profile_image_url}
                  alt="Img Profile"
                />
                <h2>{twitchUserState.data.login}</h2>
              </div>
              <div className="logging_in_desc">
                <ul>
                  <li>
                    <b>ID:</b>
                    <p>{twitchUserState.data.id}</p>
                  </li>
                  <li>
                    <b>Email:</b>
                    <EmailButton
                      id="email_button"
                      email={twitchUserState.data.email}
                    />
                  </li>
                  <li>
                    <b>Creada el:</b>
                    <p>{twitchUserState.data.created_at}</p>
                  </li>
                </ul>
              </div>
              <div className="loginTwitch">
                <NavLink
                  className="twitchButton logging_in_twitch_button"
                  to="/logreg"
                >
                  Iniciar sesión como {twitchUserState.data.login}
                </NavLink>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>{twitchUserState.errorMessage}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Logging_in;
