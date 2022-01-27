import { Navigate } from "react-router-dom";
import { useSteamAudioContext } from "../context/SteamAudioContext";

interface Props {
  to: string;
  children: JSX.Element;
}

export function PrivateRoute({children, to}: Props) {
  const { isLoggedIn } = useSteamAudioContext();

  return isLoggedIn ? children : <Navigate to={to} />;
}
