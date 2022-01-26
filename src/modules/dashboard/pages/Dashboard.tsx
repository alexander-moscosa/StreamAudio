import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export const Dashboard = () => {
  return (
    <div className="dashboardContent">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;