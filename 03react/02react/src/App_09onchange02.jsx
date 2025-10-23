import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const isVaild = email.includes('@'); // true, false
  return (
    <div>
      <h3>유효성 검사 includes</h3>
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <p>{email}</p>
      <p style={{ color: isVaild ? 'green' : 'red' }}>
        {isVaild ? '올바른 이메일 입니다.' : '올바른 이메일이 아닙니다.'}
        {/* {!isVaild ? '올바른 이메일 입니다.' : '올바른 이메일이 아닙니다.' : ''} */}
      </p>
    </div>
  );
}

export default App;
