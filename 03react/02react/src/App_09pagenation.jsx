// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import ModalComp from './components/post/ModalComp';

// function App() {
//   //*
//   //프로젝트생성 npm creat vit@latest projectname -> npm i -> code
//   //mpm run dev
//   //npm i axios / http//'https://jsonplaceholder.typicode.com/posts'
//   //useEffect hook 사용 -> json data get -> console.log(res.data)
//   //useState사용하여 state관리, json data -> state에 저장
//   //저장 state 화면에 출력, 배열.map(()=>{})
//   //리스트출력완료 후 modal component 제작
//   //modal open 을 위한 state 생성
//   //postItem state생성
//   //modal comp에 props 속성 value 전달
//   //modal comp 자료출력
//   //modal open/close 를 위한 함수 제작
//   //오류수정

//   const [postData, setPostData] = useState([]);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [postItem, setPostItem] = useState(null);

//   useEffect(() => {
//     const fetchApi = async () => {
//       try {
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/posts'
//         );
//         console.log(res.data);
//         setPostData(res.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchApi();
//   }, []);

//   function postHandler(item) {
//     setPostItem(item);
//     setModalOpen(true);
//   }
//   function modalClose() {
//     setPostItem(null);
//     setModalOpen(false);
//   }
//   return (
//     <div>
//       <h3>post</h3>
//       {modalOpen ? (
//         <ModalComp postItem={postItem} modalClose={modalClose} />
//       ) : null}
//       {postItem?.id}
//       <ul>
//         {/* {posetData && postData.map()} */}
//         {/* {postData.length > 0 ? postData.map(()=>{}) : !postData && <p>데이터가 없습니다.</p>} */}
//         {postData.length > 0
//           ? postData.map((item, i) => {
//               console.log(item);
//               return (
//                 <li
//                   key={i}
//                   onClick={() => {
//                     postHandler(item); // function로 전달
//                   }}
//                 >
//                   {item.id}. {item.title}
//                 </li>
//               );
//             })
//           : !postData && <p>데이터가 없습니다.</p>}
//       </ul>
//     </div>
//   );
// }

// export default App;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalComp from './components/post/ModalComp';

function App() {
  const [postData, setPostData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [postItem, setPostItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const postsPerPage = 5; // 페이지당 게시물 수

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

  // 페이지네이션 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(postData.length / postsPerPage);

  return (
    <div>
      <h3>post</h3>
      {modalOpen ? (
        <ModalComp postItem={postItem} modalClose={modalClose} />
      ) : null}
      {postItem?.id}
      <ul>
        {currentPosts.length > 0
          ? currentPosts.map((item, i) => {
              console.log(item);
              return (
                <li
                  key={i}
                  onClick={() => {
                    postHandler(item);
                  }}
                >
                  {item.id}. {item.title}
                </li>
              );
            })
          : !postData && <p>데이터가 없습니다.</p>}
      </ul>

      {/* 페이지네이션 버튼 */}
      <div style={{ marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: '0 5px',
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
    </div>
  );
}

export default App;
