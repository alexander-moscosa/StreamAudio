import { ReactNode } from "react";

export interface LoginCardProps {
  children: ReactNode;
}

export interface LoginTwitchProps {
  client_id: string;
  redirect_uri: string;
  scope: string[];
}