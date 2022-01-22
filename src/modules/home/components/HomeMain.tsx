import { NavLink } from "react-router-dom";

export const HomeMain = () => {
  return (
    <div className="homeMain">
      <div className="homeMainTitle">
        <h1>StreamAudio</h1>
        <p>Envía Notas de Voz a tus Streamers Favoritos</p>
      </div>
      <div className="homeMainDesc">
        <p>
          <b>StreamAudio</b> es una plataforma en la cual podrás enviar notas de
          voz a los streamers que estén registrados en este sitio web.
        </p>
        <p>
          El uso de esta plataforma es parecido al sistema de <b>bits</b> en 
          <a target='_blank' href="https://twitch.tv"> Twitch</a>. Aquí tendrás que comprar <b>puntos</b> para poder enviar notas
          de voz.
        </p>
        <p>
          El streamer podrá configurar cuántos son los <b>puntos</b> mínimos
          para recibir notas de voz, también podra configurar si solo recibe
          notas de voz de suscriptores, etc.
        </p>
        <p>
          Para evitar sanciones en la plataforma de{" "}
          <a target='_blank' href="https://twitch.tv">Twitch</a>, el streamer podrá agregar{" "}
          <b>moderadores</b> para revisar y descartar notas de voz.
        </p>
      </div>
      <div className="homeSendVoiceNoteButton">
        <NavLink to="/login">
          Enviar Nota de Voz
        </NavLink>
      </div>
    </div>
  );
};
