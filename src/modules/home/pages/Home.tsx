import { HomeNav } from "../components/HomeNav";
import { HomeMain } from '../components/HomeMain';
import { HomeFooter } from '../components/HomeFooter';

export const Home = () => {
  return (
    <>
      <div className="homeContent">
        <HomeNav />
        <HomeMain />
      </div>
      <HomeFooter />
    </>
  );
};
