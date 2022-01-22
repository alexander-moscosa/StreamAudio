import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../modules/home/pages/Home";
import { Logging_in } from "../modules/logging-in/pages/Logging-in";
import { Login } from "../modules/login/pages/Login";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="logging-in" element={<Logging_in />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
