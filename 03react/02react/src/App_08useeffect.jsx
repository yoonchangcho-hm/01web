import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLoggedIn] = useState(false);
  const [mydata, setMydata] = useState([]);
  console.log('작동되었습니다.');

  //   useEffect(함수, [의존성배열])
  //   useEffect(()=>{},[])
  useEffect(() => {
    console.log('useEffect');
  }, []);

  useEffect(() => {
    async function fetchData() {
      console.log('데이터가 들어옴');
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      console.log(data);
      setMydata(data);
      //   mydata.push(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      App / {count}
      <div>
        {/* <button onClick={()=>{setCount(count+1)}}>클릭</button> */}
        <button
          onClick={() => {
            setCount(count + 1);
            setisModal;
          }}
        >
          클릭
        </button>

        <button
          onClick={() => {
            setIsLoggedIn(!isLogin);
          }}
        >
          클릭
        </button>

        {/* mydata = [{userId:1,id:1,title:''},{},{}] */}

        {mydata && '자료가 있어요'}
        {mydata &&
          mydata.map((item, i) => {
            return (
              <div>
                <h3>
                  {item.id}. {item.title}
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

//api데이터 가고오는
// $.ajax()/fetch api(json파일로parse)
//*axios(npm axios install)
