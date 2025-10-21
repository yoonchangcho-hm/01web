import React, { useState } from 'react';

function App() {
  // const isLoggedIn = true;
  const [isLoggedIn, setIsLoggedIn] = useState(flase);

  // const loginHandler = () => {
  //   setIsLoggedIn(true);
  // };

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      App
      {/* <Greeting isLoggedIn={isLoggedIn} name="홍길동" /> */}
      {isLoggedIn && <Greeting isLoggedIn={isLoggedIn} name="홍길동" />}
      <button onClick={loginHandler}>
        {isLoggedIn ? '로그아웃' : '로그인'}
      </button>
    </div>
  );
}

function Greeting({ isLoggedIn, name }) {
  if (isLoggedIn) {
    return <h1>로그인 되었습니다.{name}님 환영합니다.</h1>;
  }

  return <div>로그인이 필요합니다.</div>;
}

export default App;
