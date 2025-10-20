import React, { useState } from 'react';
import './tab.css';

function Modal({ title, content, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>{title}</h4>
        <p>{content}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

function App() {
  const data = [
    {
      title: '안녕하세요1',
      content:
        '1Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quasi pariatur maiores distinctio? Iusto officia atque labore, ratione voluptatum quam.',
    },
    {
      title: '안녕하세요2',
      content:
        '2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quasi pariatur maiores distinctio? Iusto officia atque labore, ratione voluptatum quam.',
    },
    {
      title: '안녕하세요3',
      content:
        '3Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit quasi pariatur maiores distinctio? Iusto officia atque labore, ratione voluptatum quam.',
    },
  ];

  const [tab, setTab] = useState(null);

  const openModal = (index) => {
    setTab(index);
  };

  const closeModal = () => {
    setTab(null);
  };

  return (
    <div>
      <h2>Tab Menu</h2>
      <ul className="tab">
        {data.map((item, index) => (
          <li
            key={index}
            className={`han ${tab === index ? 'active' : ''}`}
            onClick={() => openModal(index)}
          >
            tab{index + 1}
          </li>
        ))}
      </ul>

      {tab !== null && (
        <Modal
          title={data[tab].title}
          content={data[tab].content}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;
