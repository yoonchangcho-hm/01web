import React, { useState } from 'react';
import ModalComp from './components/listView/ModalComp';

const data = () => {
  const data = [
    {
      title: '안녕하세요1',
      content:
        '1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quasi pariatur maiores distinctio? Iusto officia atque labore, ratione voluptatum quam.',
      name: '이순신',
      date: '2025-10-15',
    },
    {
      title: '안녕하세요2',
      content:
        '2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quasi pariatur maiores distinctio? Iusto officia atque labore, ratione voluptatum quam.',
      name: '홍길동',
      date: '2025-10-18',
    },
    {
      title: '안녕하세요3',
      content:
        '3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quasi pariatur maiores distinctio? Iusto officia atque labore, ratione voluptatum quam.',
      name: '김철수',
      date: '2025-10-16',
    },
  ];
  function App() {
    
// 1. data 만들거나 정보 파악 ([{},{},{}])
// 2. 게시판리스트(array.map())
// 3. click event
// 4. useState(0)를 작성
// 5. modal디자인(컴포넌트생성)
// 6. useState(false) 작성
// 7. props에 대한 설계 (props, event)
// 8. 오류해결
 
  const [num, setNum] = useState(0);
  const [modal, setModal] = useState(false);

  const clickFn = (index) => {
    // alert(index);
    setNum(index);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <div>
      <h3>text list / ({num})</h3>
      <ul>
        {data.map((item, i) => {
          // return <li onClick={clickFn}>{item.title}</li>;
          return (
            <li
              onClick={() => {
                clickFn(i);
              }}
            >
              {item.title} / {item.name} / {item.date}
            </li>
          );
        })}
      </ul>
      {modal ? (
        <ModalComp num={num} data={data} modalClose={modalClose} />
      ) : null}
    </div>
  );
}

export default App;

