import { Navigate } from "react-router-dom";
import { useSteamAudioContext } from "../context/SteamAudioContext";

interface Props {
  to: string;
  children: JSX.Element;
}

export function PublicRoute({to, children}: Props) {
  const { isLoggedIn } = useSteamAudioContext();

  return isLoggedIn ? <Navigate to={to} /> : children;
}