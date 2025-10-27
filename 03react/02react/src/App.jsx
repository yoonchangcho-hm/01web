import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuComp from './components/layout/MenuComp';
import HomeComp from './components/pages/HomeComp';
import AboutComp from './components/pages/AboutComp';
import BoardComp from './components/pages/BoardComp';
import ErrorComp from './components/pages/ErrorComp';

function App() {
  return (
    <BrowserRouter>
      <MenuComp />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/about" element={<AboutComp />} />
          <Route path="/board" element={<BoardComp />} />
          <Route path="/board/:name1/:age1" element={<BoardComp />} />
          {/* useParams */}

          {/* <Route path="/board?id=:id" element={<BoardComp />} /> */}
          <Route path="/*" element={<ErrorComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
