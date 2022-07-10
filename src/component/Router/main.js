import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/login";
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
export default Main;
