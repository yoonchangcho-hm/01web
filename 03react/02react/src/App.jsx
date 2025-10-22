import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalComp from './components/post/ModalComp';

function App() {
  //*
  //프로젝트생성 npm creat vit@latest projectname -> npm i -> code
  //mpm run dev
  //npm i axios / http//'https://jsonplaceholder.typicode.com/posts'
  //useEffect hook 사용 -> json data get -> console.log(res.data)
  //useState사용하여 state관리, json data -> state에 저장
  //저장 state 화면에 출력, 배열.map(()=>{})
  //리스트출력완료 후 modal component 제작
  //modal open 을 위한 state 생성
  //postItem state생성
  //modal comp에 props 속성 value 전달
  //modal comp 자료출력
  //modal open/close 를 위한 함수 제작
  //오류수정

  const [postData, setPostData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [postItem, setPostItem] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        console.log(res.data);
        setPostData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchApi();
  }, []);

  function postHandler(item) {
    setPostItem(item);
    setModalOpen(true);
  }
  function modalClose() {
    setPostItem(null);
    setModalOpen(false);
  }
  return (
    <div>
      <h3>post</h3>
      {modalOpen ? (
        <ModalComp postItem={postItem} modalClose={modalClose} />
      ) : null}
      {postItem?.id}
      <ul>
        {/* {posetData && postData.map()} */}
        {/* {postData.length > 0 ? postData.map(()=>{}) : !postData && <p>데이터가 없습니다.</p>} */}
        {postData.length > 0
          ? postData.map((item, i) => {
              console.log(item);
              return (
                <li
                  key={i}
                  onClick={() => {
                    postHandler(item); // function로 전달
                  }}
                >
                  {item.id}. {item.title}
                </li>
              );
            })
          : !postData && <p>데이터가 없습니다.</p>}
      </ul>
    </div>
  );
}

export default App;
