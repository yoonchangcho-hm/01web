import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  console.log('작동되었습니다.');

  //   useEffect(함수, [의존성배열])
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <div>
      App / {count}
      <div>
        {/* <button onClick={()=>{setCount(count+1)}}>클릭</button> */}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          클릭
        </button>
      </div>
    </div>
  );
}

export default App;
