import React from 'react';
import react from './assets/react.svg';

function App() {
  const test = 10;
  const view = {
    color: 'white',
    backgroundColor: 'pink',
  };
  let isLogin = true;
  const city = ['서울', '부산', '대구', '광주'];
  return (
    // <div>
    //   <h1>test</h1>
    //   <p>{test}</p>

    //   <div className="caotainer"></div>
    // </div>

    <>
      <div className="container" style={view}>
        111
        <img src={react} alt="" />
        {isLogin ? <p>로그인완료</p> : <p>로그인하세요</p>}
        {/* {city.map(function(){}) }
        {city.map(()=>{}) } */}
        {city.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </>
  );
}

export default App;
