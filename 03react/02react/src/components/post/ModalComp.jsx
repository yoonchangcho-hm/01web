import React from 'react';

function ModalComp({ postItem, modalClose }) {
  return (
    <div className="modalItem">
      <div>
        <h3>
          {postItem.id}. {postItem.title}
        </h3>
        <div onClick={modalClose}>x</div>
      </div>
      <p>{postItem.body}</p>
      <button onClick={modalClose}>닫기</button>
    </div>
  );
}

export default ModalComp;
