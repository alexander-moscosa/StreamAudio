import { GetUserProps, twitchUserState } from '../interfaces/interfaces';
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { EmailButton } from '../componets/EmailButton';
import { userExist } from '../helpers/userExist';
import {
  StateActions,
  useSteamAudioContext,
} from '../../../context/SteamAudioContext';

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

  const navigate = useNavigate();

  const { dispatch, isLoggingIn } = useSteamAudioContext();

  const [isRegistered, setIsRegistered] = useState(false);

  const handleButtonClick = async () => {
    const data = {
      username: twitchUserState.data?.login,
      email: twitchUserState.data?.email,
      twitch_id: twitchUserState.data?.id,
    };

    const type = isRegistered ? 'login' : 'register';

    axios
      .post(`http://localhost:9090/api/v1/user/${type}`, data)
      .then((data) => {
        dispatch({
          type: StateActions.SET_DATA,
          payload: {
            value: {
              ...twitchUserState.data,
              extra: data.data.user._id,
            },
          },
        });
        dispatch({
          type: StateActions.LOGGED_IN,
          payload: { value: true },
        });
        navigate('/dashboard', { replace: true });
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log(error.response);
        }
      });
  };

  useEffect(() => {
    // Verificar se está loggeando
    if (!isLoggingIn) {
      navigate('/', { replace: true });
      return;
    }

    // Loggearse con Twitch
    const sendRequest = () => {
      const params = new URLSearchParams(
        window.location.hash.replace('#', '?'),
      );
      const token = params.get('access_token');

      const config: GetUserProps = {
        headers: {
          Authorization: `Bearer ${token}` || '',
          'Client-Id': 'b5g4ef9i6y2pkk7hx6591ggva34hqr',
        },
      };

      axios
        .get('https://api.twitch.tv/helix/users', config)
        .then(({ data }) => {
          twitchUserDispatch({ ok: true, data: data.data[0] });
        })
        .catch((err) => {
          if (axios.isAxiosError(err)) {
            twitchUserDispatch({
              ok: false,
              errorMessage: err.message,
              data: null,
            });
          }
        });
    };

    sendRequest();

    return () => {
      twitchUserDispatch({ ok: false, data: null });
    };
  }, [navigate, isLoggingIn]);

  useEffect(() => {
    const verifyUser = () => {
      // Verificar si el usuario está registrado

      const userData = twitchUserState.data;

      if (userData) {
        userExist(userData.login)
          .then((data) => {
            setIsRegistered(data.exist);
          })
          .catch((error) => {
            setIsRegistered(error.exist);
          });
      }
      return;
    };
    verifyUser();
  }, [twitchUserState]);

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
                <button
                  className="twitchButton logging_in_twitch_button"
                  id="button_logging_in"
                  onClick={handleButtonClick}
                >
                  {isRegistered ? 'Iniciar sesión' : 'Registrarse'} como{' '}
                </button>
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
