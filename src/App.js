import * as React from 'react';
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LocationMap from './pages/LocationMap';
import Home from './pages/Home';
/* import Main from './pages/Main';
import MakeClub from './pages/MakeClub'; */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="locationmap" element={<LocationMap/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
