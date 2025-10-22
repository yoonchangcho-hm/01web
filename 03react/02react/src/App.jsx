import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const [form, setForm] = useState({ myname: '기본이름', email: '기본이메일' });

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [checked, setChecked] = useState(false);
  const [fruit, setFruit] = useState('apple');

  // const form = {
  //   myname: '',
  //   email: '',
  // };
  // form['mylname'] =

  // const arr = ["서울,"부산"]
  //   arr [0]

  function changeHandler(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }

  function formHandler(e) {
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h4>Form</h4>
      <input type="text" onChange={changeHandler} />
      <p>{text}</p>

      <input
        type="text"
        name="myname"
        placeholder="이름"
        onChange={formHandler}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="이메일"
        onChange={formHandler}
      />
      <p>
        {form.myname} / {form.email}
      </p>

      <input
        type="number"
        onChange={(e) => {
          setNum1(Number(e.target.value));
        }}
      />
      <input
        type="number"
        onChange={(e) => {
          setNum2(Number(e.target.value));
        }}
      />
      <p>{num1 * num2}</p>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />

      {checked ? '체크됨' : '체크 안됨'}

      <br />

      <select
        name="select"
        onChange={(e) => {
          setFruit(e.target.value);
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="grape">포도</option>
      </select>
      {fruit}
    </div>
  );
}

export default App;
