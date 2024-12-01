import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LocationMap from './pages/LocationMap';

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/locationmap' element={<LocationMap/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
