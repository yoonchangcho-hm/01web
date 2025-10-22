import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalComp from './components/post/ModalComp';

function App() {
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
        console.error('데이터 가져오기 실패:', error);
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
    <div style={{ padding: '20px' }}>
      <h3>게시물 리스트</h3>

      {modalOpen && <ModalComp postItem={postItem} modalClose={modalClose} />}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {postData.length > 0 ? (
          postData.map((item) => (
            <li
              key={item.id}
              onClick={() => postHandler(item)}
              style={{
                padding: '10px',
                marginBottom: '5px',
                border: '1px solid #ccc',
                cursor: 'pointer',
              }}
            >
              {item.id}. {item.title}
            </li>
          ))
        ) : (
          <p>데이터가 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default App;

// 프로젝트생성 npm creat vit@latest projectname -> npm i -> code
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
