import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const clickFn = () => {
    setCount(count + 1);
  };
  return (
    <div style={{ padding: '10px' }}>
      <h3>할아버지</h3>
      <Father count={count} countClick={clickFn} />
      {/* <button onClick={clickFn}>클릭</button> */}
    </div>
  );
}

function Father({ count, countClick }) {
  return (
    <div style={{ border: '5px solid #f00', padding: '10px' }}>
      <h4>아버지 / {count}</h4>
      <Child count={count} countClick={countClick} />
    </div>
  );
}

function Child({ count, countClick }) {
  return (
    <div style={{ border: '5px solid #00f', padding: '10px' }}>
      <h4>아들/ {count}</h4>
      <button onClick={countClick}>클릭</button>
    </div>
  );
}
export default App;
