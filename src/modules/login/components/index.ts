import { LoginCard as LoginCardHOC } from './LoginCard';
import { LoginTwitch } from './LoginTwitch';
import { LoginDesc } from './LoginDesc';


export const LoginCard = Object.assign( LoginCardHOC, {
  LoginTwitch,
  LoginDesc
});