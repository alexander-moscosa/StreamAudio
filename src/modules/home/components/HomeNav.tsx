import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";

export const HomeNav = () => {
  return (
    <div className="homeNav">
      <nav>
        <ul>
          <li>
            <NavLink to='/login'>
              Inicia Sesión
              <FontAwesomeIcon icon={ faArrowRightToBracket } />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
