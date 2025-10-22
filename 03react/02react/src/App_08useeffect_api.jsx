import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPostData(res.data);
    };
    fetchApi();
  }, []);

  const openModal = (item) => {
    setSelectedPost(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setModalOpen(false);
  };

  return (
    <div>
      <h2>App</h2>
      {postData &&
        postData.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                openModal(item);
              }}
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderBottom: '1px solid #ccc',
              }}
            >
              {item.id}. {item.title}
            </div>
          );
        })}

      {/* 모달 영역 */}
      {modalOpen && selectedPost && (
        <>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 999,
            }}
            onClick={closeModal}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              zIndex: 1000,
              width: '400px',
            }}
          >
            <h3>{selectedPost.title}</h3>
            <p>{selectedPost.body}</p>
            <button onClick={closeModal}>닫기</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
