import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ComComp from './about/ComComp';
import HistoryComp from './about/HistoryComp';

function AboutComp() {
  return (
    <div className="container">
      <div
        style={{ width: '100%', height: '200px' }}
        className="d-flex justify-content-center align-items-center bg-info rounded mb-3"
      >
        About
      </div>
      <div className="d-flex justify-content-center gap-3 ">
        <Link to="../about/company" className="nav-link">
          회사소개
        </Link>
        <Link to="../about/history" className="nav-link">
          연혁
        </Link>
      </div>
      <Routes>
        <Route index element={<ComComp />}></Route>
        <Route path="company" element={<ComComp />}></Route>
        <Route path="history" element={<HistoryComp />}></Route>
      </Routes>
    </div>
  );
}

export default AboutComp;
