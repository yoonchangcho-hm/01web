import React from 'react';

function ModalComp({ modalClose }) {
  return (
    <div>
      ModalComp
      <button onClick={modalClose}>닫기</button>
    </div>
  );
}

export default ModalComp;
