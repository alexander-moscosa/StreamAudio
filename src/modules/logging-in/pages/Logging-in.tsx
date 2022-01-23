import { GetUserProps, twitchUserState } from "../interfaces/interfaces";
import { useEffect, useReducer } from "react";
import axios from "axios";

const initial_state: twitchUserState = {
  ok: false,
  data: false,
};

export const Logging_in = () => {
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

  const [twitchUserState, twitchUserDispatch] = useReducer(
    reducer,
    initial_state
  );

  const params = new URLSearchParams(window.location.hash.replace("#", "?"));
  const token = params.get("access_token");


  const config: GetUserProps = {
    headers: {
      Authorization: `Bearer ${token}` || "",
      "Client-Id": "b5g4ef9i6y2pkk7hx6591ggva34hqr",
    },
  };

  useEffect(() => {
    try {
      axios.get("https://api.twitch.tv/helix/users", config).then(({ data }) => {
        twitchUserDispatch({ ok: true, data: data.data });
      });
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        twitchUserDispatch({ ok: false, data: err.message });
      }
    }
  }, []);
  
  console.log(twitchUserState);

  return (
    <div className="logging_in_content">
      <div className="logging_in_title">¡Iniciando Sesión!</div>
      <div className="logging_in_body">
        <div className="logging_in_introduction">
          {/* <img src={twitchUserState.data[0].profile_image_url} alt="Img Profile" /> */}
          {/* <h1>{ twitchUserState.data[0].display_name }</h1> */}
        </div>
      </div>
    </div>
  );
};
