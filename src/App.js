import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BakeryBanner from './components/BakeryBanner';
import Thankyoupage from './components/Thankyoupage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BakeryBanner />} />
        <Route path="/thankyou" element={<Thankyoupage/>} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
