import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({profile_image, username}: {
  profile_image: string;
  username: string;
}) => {
  return (
    <nav className="navbar">
      <div className="leftSide">
        <div className="pathName">Inicio</div>
      </div>
      <div className="rightSide">
        <div className="pointsNavBar">
          <FontAwesomeIcon icon={ faCoins } />
          <a>10000</a>
        </div>
        <div className="usernameNavBar">
          {username}
        </div>
        <div className="profilePictureNavBar">
          <img src={profile_image} alt="IMG" />
        </div>
      </div>
    </nav>
  );
};
