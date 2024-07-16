import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MyPage } from "./pages/My";
import { MapPage } from "./pages/Map";

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/Reviewall' element={<Reviewallpage/>} />
      <Route path='/Modifyprofile' element={<ModifyProfilepage/>} />
      <Route path="/my" element={<MyPage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  ); 
}

export default App;
