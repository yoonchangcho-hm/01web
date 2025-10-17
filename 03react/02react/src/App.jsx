import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/state/Button';
import './App.css';

function App() {
  const [isModal, setIsModal] = useState(false);

  const Modal = (
    <div className="modal-overlay">
      <div className="vModal">
        <div className="title">
          <h3>모달창</h3>
          <div className="close-btn" onClick={() => setIsModal(false)}>
            ×
          </div>
        </div>
        <p className="modal-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="modal-btn" onClick={() => setIsModal(false)}>
          <Button title="닫기" color="blue" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="app">
      <h3>모달창 만들기</h3>

      {isModal && ReactDOM.createPortal(Modal, document.getElementById('root'))}

      <div className="open-btn" onClick={() => setIsModal(true)}>
        <Button title="창띄우기" />
      </div>
    </div>
  );
}

export default App;
