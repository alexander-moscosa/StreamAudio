import SteamAudioProvider from './context/SteamAudioContext';
import { Navigation } from './routes/Navigation';

const App = () => {
  return (
    <SteamAudioProvider>
      <Navigation />
    </SteamAudioProvider>
  );
};

export default App;
