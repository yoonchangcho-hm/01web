import React, { useState } from 'react';
import Button from './components/state/Button';

function App() {
  const test = 3;
  const [count, setCount] = useState(1);
  const [view, setView] = useState(false);
  // const [count] = useState([
  //   { city: '서울', cont: 'test' },
  //   { city: '부산', cont: 'test' },
  // ]);
  // const [count] = useState(['서울', '부산']);
  // const [allCity] = useState([{ city: '서울', cont: 'test' }]);
  // console.log(count[0]);
  // console.log(count[0].city);

  function han() {
    setCount(count + 1);
  }

  const han1 = function () {
    setCount(count + 1);
  };

  const han2 = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h3>state</h3>
        <button onClick={han2}>{count}</button>
        {/* <button onClick={()=>{setCount(count+1)}}>{count}</button> */}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button>
        <hr />
        {test}
        <Button title="글쓰기"></Button>
        <Button title="글수정" color="red"></Button>
        <Button title="글리스트" color="blue"></Button>

        {/* <a href="" className="btn btn-primary"></a> */}
      </div>
    </>
  );
}

export default App;
