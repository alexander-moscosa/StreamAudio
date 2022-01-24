import { GetUserProps, twitchUserState } from "../interfaces/interfaces";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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

  const [emailText, setEmailText] = useState("");
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const email_button = document.getElementById("email_button");

    email_button?.addEventListener("click", () => {
      if (!isShown) {
        setEmailText(emailText.replace(/[^\s]/g, "*"));
        setIsShown(true);
      } else {
        setEmailText(twitchUserState.data[0].email);
        setIsShown(false);
      }
    });

    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const token = params.get("access_token");

    const config: GetUserProps = {
      headers: {
        Authorization: `Bearer ${token}` || "",
        "Client-Id": "b5g4ef9i6y2pkk7hx6591ggva34hqr",
      },
    };
    try {
      axios
        .get("https://api.twitch.tv/helix/users", config)
        .then(({ data }) => {
          twitchUserDispatch({ ok: true, data: data.data });
          setEmailText(data.data[0].email);
        });
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        twitchUserDispatch({ ok: false, data: err.message });
      }
    }
  }, []);

  return (
    <div className="logging_in_content">
      <div className="logging_in_card">
        <div className="logging_in_title">
          <h1>¡Iniciando Sesión!</h1>
        </div>
        <div className="logging_in_body">
          <div className="logging_in_introduction">
            <img
              src={
                twitchUserState.ok
                  ? twitchUserState.data[0].profile_image_url
                  : ""
              }
              alt="Img Profile"
            />
            <h2>{twitchUserState.ok ? twitchUserState.data[0].login : ""}</h2>
          </div>
          <div className="logging_in_desc">
            <ul>
              <li>
                <b>ID:</b>
                <p>{twitchUserState.ok ? twitchUserState.data[0].id : ""}</p>
              </li>
              <li>
                <b>Email:</b>
                <button id="email_button">
                  {twitchUserState.ok ? emailText : ""}
                </button>
              </li>
              <li>
                <b>Creada el:</b>
                <p>
                  {twitchUserState.ok ? twitchUserState.data[0].created_at : ""}
                </p>
              </li>
            </ul>
          </div>
          <div className="loginTwitch">
            <NavLink
              className="twitchButton logging_in_twitch_button"
              to="/logreg"
            >
              Iniciar sesión como{" "}
              {twitchUserState.ok ? twitchUserState.data[0].login : ""}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logging_in;
