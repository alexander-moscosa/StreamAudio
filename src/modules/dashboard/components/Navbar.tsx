import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
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
          tacosdesuadero03
        </div>
        <div className="profilePictureNavBar">
          <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ffdab81c-3e79-4451-88d2-70e61474b0a8-profile_image-70x70.png" alt="IMG" />
        </div>
      </div>
    </nav>
  );
};
