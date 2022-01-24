import { LoginCard } from '../components/index';

export const Login = () => {
  return (
    <div className="loginContent">
      <LoginCard>
        <LoginCard.LoginTwitch client_id='b5g4ef9i6y2pkk7hx6591ggva34hqr' redirect_uri='http://localhost:3000/logging-in' scope={ [ 'channel:read:subscriptions', 'user:read:email', 'user:read:follows' ] } />
        <LoginCard.LoginDesc />
      </LoginCard>
    </div>
  );
};

export default Login;