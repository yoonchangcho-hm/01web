import React from 'react';

function App() {
  return (
    <div>
      <h3>parent</h3>
      <Child>나는 아이입니다.</Child>
      <ButtonComp>삭제</ButtonComp>
      <ButtonComp color="red">리스트</ButtonComp>
    </div>
  );
}

function Child({ children }) {
  return (
    <div>
      <h3>child</h3>
      <p>{children}</p>
    </div>
  );
}

function ButtonComp(props) {
  return <button>{props.children}</button>;
}

export default App;
