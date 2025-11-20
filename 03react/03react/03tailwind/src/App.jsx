import React, { useEffect, useState } from 'react';
import { getBoard } from './api/boardApi';
import { useBoard } from './context/BoardContext';

function App() {
  const { boardData, fetchData, totalCount, addBoard } = useBoard();

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  // const { boardData, fetchData } = useState();
  // const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    // const { data } = await axios.get('http://localhost:8080/api/board');
    // console.log(data);

    // const data = await getBoard();
    // setBoardData(data);
    // };
    fetchData(0, 2);
  }, []);

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   alert('test');
  // };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // alert('test');
    const newBoard = { title, name, content };

    await addBoard(newBoard);
    alert('데이터전송완료');
  };
  return (
    <div>
      <h3>board / 총 게시물 {totalCount} 개</h3>
      {boardData &&
        boardData.map((item, i) => {
          return (
            <div key={i}>
              {item.id} / {item.title} / {item.content}
            </div>
          );
        })}

      <div>
        <h3>글잗성하기</h3>

        <form onSubmit={onSubmitHandler}>
          <div className="flex flex-col; gap-3">
            <label htmlFor="">title</label>
            <input
              type="text"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="bg-gray-200"
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="">name</label>
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-gray-200"
            />
          </div>
          <div className="flex gap-3">
            <label htmlFor="">content</label>
            <input
              type="text"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="bg-gray-200"
            />
          </div>
          <button className="w-50 rounded p-2 bg-blue-500 text-white text-sm hover:bg-blue-800">
            글작성완료
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
