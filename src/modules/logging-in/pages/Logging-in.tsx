import { GetUserProps } from "../interfaces/interfaces";
import { getTwitchUserRequest } from "../hooks/getTwitchUserRequest";
import { useEffect, useState } from "react";
import axios from "axios";

export const Logging_in = () => {
  const [getTwitchUser, setGetTwitchUser] = useState(
    {} as { ok: boolean; data: any }
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.replace("#", "?"));
    const token = params.get("access_token");
    const config: GetUserProps = {
      headers: {
        Authorization: `Bearer ${token}` || "",
        "Client-Id": "b5g4ef9i6y2pkk7hx6591ggva34hqr",
      },
    };

    getTwitchUserRequest( config, setGetTwitchUser );

  }, []);

  console.log(getTwitchUser.data[0].id);
  

  return (
    <div className="logging_in_content">
      <div className="logging_in_title">Iniciando Sesión</div>
      <div className="logging_in_body">Username: { getTwitchUser.data[0].id }</div>
    </div>
  );
};
