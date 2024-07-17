import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyPage } from "./pages/My";
import { MapPage } from "./pages/Map";
import { LoginPage } from "./pages/Login";
import { Reviewallpage } from "./pages/Reviewall";
import { ModifyProfilepage } from "./pages/Modifyprofile";
import { Reviewpage } from "./pages/Review";
import { Revierwritepage } from "./pages/Reviewwrite";
import { NavermapsProvider } from "react-naver-maps";

function App() {
  return (
   <NavermapsProvider ncpClientId="vgzwlz1i4m">
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Reviewall" element={<Reviewallpage />} />
      <Route path="/Modifyprofile" element={<ModifyProfilepage />} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/Review" element={<Reviewpage />} />
      <Route path="/Reviewwrite" element={<Revierwritepage />} />
    </Routes>
   </NavermapsProvider>

export default App;
