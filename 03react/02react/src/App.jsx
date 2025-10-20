import React, { useState } from 'react';
import ModalComp from './components/modal/ModalComp';

function App() {
  const [modalView, setModalView] = useState(false);

  const modalViewFn = () => {
    setModalView(true);
  };

  const modalClose = () => {
    setModalView(false);
  };
  return (
    <div>
      <h3>modal test</h3>
      <button onClick={modalViewFn}>모달보기</button>
      <button onClick={modalClose}>모달닫기</button>
      {modalView ? <ModalComp modalClose={modalClose} /> : null}
    </div>
  );
}

export default App;
