import React from 'react';
import { usePost } from '../../context/PostContext';

function ChildComp() {
  const { view, setView, viewHandler, vData } = usePost(); // ciew:"안녕하세요",setView
  return (
    <div>
      ChildComp / {view}
      <p>
        <button
          onClick={() => {
            setView('홍길동님, 안녕하세요');
          }}
        >
          변경
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            viewHandler();
          }}
        >
          클릭
        </button>
      </p>
      {vData ? <p>데이터가있음</p> : <p>데이터가없음 </p>}
    </div>
  );
}

export default ChildComp;
