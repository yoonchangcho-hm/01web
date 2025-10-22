import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalComp from './components/post/ModalComp';

function App() {
  const [postData, setPostData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [postItem, setPostItem] = useState(null);

  const [currentPage, setCurrentPage] = useState(1); //page--
  const itemsPerPage = 5; //--page
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

  //page--
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = postData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(postData.length / itemsPerPage);
  //--page

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

      {/* page-- */}

      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              marginRight: '5px',
              padding: '5px 10px',
              backgroundColor: currentPage === i + 1 ? '#007bff' : '#f0f0f0',
              color: currentPage === i + 1 ? '#fff' : '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {/* --page */}
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
