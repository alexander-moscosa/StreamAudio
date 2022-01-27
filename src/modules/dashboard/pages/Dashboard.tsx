import { useSteamAudioContext } from '../../../context/SteamAudioContext';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export const Dashboard = () => {
  const { data } = useSteamAudioContext();

  return (
    <div className="dashboardContent">
      <Navbar profile_image={data.profile_image_url} username={data.display_name} />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
