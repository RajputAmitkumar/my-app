// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import Header from './components/header/Header';
// import Postview from './components/postview/Postview';
import Landing from './components/landingPage/LandingPage';
import Postview from './components/postview/Postview';

const App=() => {
  return <>
    {/* <Header/>
    <Postview/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/landingPage' element={<Landing/>}/>
      <Route path='/postview' element={<Postview/>} />
    </Routes>
    </BrowserRouter>
  </>
}

export default App;
