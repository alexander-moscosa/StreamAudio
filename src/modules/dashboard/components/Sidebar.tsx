import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faHouseUser,
  faMicrophone,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { HomeDashboard } from "../pages/HomeDashboard";

export const Sidebar = () => {
  return (
    <div className="sideBarContent">
      <div className="sideBar">
        <div className="sideBarTitle">
          <div className="sideBarTitleText">Panel de Control</div>
          <div className="sideBarTitleIcon">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
        </div>
        <div className="sideBarRoutes">
          <ul>
            <li>
              <NavLink
                to="home"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                <FontAwesomeIcon icon={faHouseUser} />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="notes_received"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                <FontAwesomeIcon icon={faMusic} />
                <span>Notas de voz recibidas </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="send_note"
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                <FontAwesomeIcon icon={faMicrophone} />
                <span>Enviar nota de voz</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboardGridContent">
        <Routes>
          <Route path="home" element={<HomeDashboard />} />
          <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Routes>
      </div>
    </div>
  );
};
