import { LoginCardProps } from "../interfaces/interfaces";

export const LoginCard = ( { children }: LoginCardProps ) => {
  return (
    <div className="loginCard">
      { children }
    </div>
  );
};
