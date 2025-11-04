import { createContext, useContext } from 'react';

const PostContext = createContext();

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('이 훅은 PostProvider 안에 적용해야함');
  }
  return context;
};

export const PostProvider = ({ children }) => {
  return (
    <PostContext.Provider value="안녕하세요">{children}</PostContext.Provider>
  );
};
