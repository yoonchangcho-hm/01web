import React, { useState } from 'react';
import Button from './components/state/Button';
import './App.css';

function App() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div>
      <h3>모달창 만들기</h3>
      {isModal ? (
        <div className="vModal">
          <div className="title">
            <h3>모달창</h3>
            <div
              onClick={() => {
                setIsModal(false);
              }}
            >
              x
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          {/* 닫기 버튼 */}
          <div
            onClick={() => {
              setIsModal(false);
            }}
          >
            <Button title="닫기" color="blue"></Button>
          </div>
        </div>
      ) : null}

      <div
        onClick={() => {
          // setIsModal(true);
          setIsModal(!isModal);
        }}
      >
        <Button title="창띄우기"></Button>
      </div>
      {/* <div
        onClick={() => {
          setIsModal(false);
        }}
      >
        <Button title="창닫기" color="red"></Button>
      </div> */}
    </div>
  );
}

export default App;
