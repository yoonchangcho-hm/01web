// import React from 'react';

// function ModalComp({ postItem, modalClose }) {
//   return (
//     <div className="modalItem">
//       <div>
//         <h3>
//           {postItem.id}. {postItem.title}
//         </h3>
//         <div onClick={modalClose}>x</div>
//       </div>
//       <p>{postItem.body}</p>
//       <button onClick={modalClose}>닫기</button>
//     </div>
//   );
// }

// export default ModalComp;

import React from 'react';

function ModalComp({ postItem, modalClose }) {
  if (!postItem) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        padding: '20px',
        border: '1px solid #ccc',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
      }}
    >
      <h4>📌 게시물 상세</h4>
      <p>
        <strong>ID:</strong> {postItem.id}
      </p>
      <p>
        <strong>Title:</strong> {postItem.title}
      </p>
      <p>
        <strong>Body:</strong> {postItem.body}
      </p>
      <button
        onClick={modalClose}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        닫기
      </button>
    </div>
  );
}

export default ModalComp;
