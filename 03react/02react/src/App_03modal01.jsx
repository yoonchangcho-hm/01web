import React, { useState } from 'react';
import ModalComp from './components/modal/ModalComp';

function App() {
  const [modalView, setModalView] = useState(false);
  const content = {
    title: '안녕하세요.',
    vContent:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi minus aliquid consectetur porro! Voluptatibus error maxime soluta libero nisi temporibus, numquam aperiam officia consectetur quo repellendus, nemo dolorem quaerat voluptas?',
  };

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
