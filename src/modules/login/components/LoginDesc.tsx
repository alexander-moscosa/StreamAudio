export const LoginDesc = () => {
  return (
    <div className="loginDesc">
      <div className="loginTitle">
        <h1>¿Por qué necesitamos que inicies sesión con Twitch?</h1>
      </div>
      <div className="loginBody">
        <p>
          Para que esta plataforma tenga una buena experiencia de usuario,
          requerimos de los siguientes permisos:
        </p>
        <ul>
          <li>
            <b>Correo Electrónico:</b>{" "}
            <p>
              Con el correo electrónico, te registraremos e identificaremos en
              esta aplicación web.
            </p>
          </li>
          <li>
            <b>Suscriptores del canal:</b>{" "}
            <p>
              Si eres streamer, con este permiso podrémos evaluar que solo tus
              suscriptores puedan mandarte notas de voz, en caso de que así tu
              lo prefieras.{" "}
            </p>
          </li>
          <li>
            <b>Streamers a los que sigues:</b>{" "}
            <p>
              Haciendo uso de este permiso, podremos mostrarte qué streamers a
              los que sigues están en esta plataforma.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
