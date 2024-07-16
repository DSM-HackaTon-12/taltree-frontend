import { Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './pages/Login';
import { Reviewallpage } from './pages/Reviewall';
import { ModifyProfilepage } from './pages/Modifyprofile';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/Reviewall' element={<Reviewallpage/>} />
      <Route path='/Modifyprofile' element={<ModifyProfilepage/>} />
    </Routes>
  ); 
}

export default App;
