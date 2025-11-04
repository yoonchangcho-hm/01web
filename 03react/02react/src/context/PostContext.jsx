import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('이 훅은 PostProvider 안에 적용해야함');
  }
  return context;
};

export const PostProvider = ({ children }) => {
  const [view, setView] = useState('안녕하세요');

  const viewHandler = () => {
    alert('hi');
  };

  const [vData, setVData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log(data);
      setVData(data);
    };
    fetchData();
  }, []);

  const value = {
    view: view,
    setView: setView,
    viewHandler: viewHandler,
    vData: vData,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
