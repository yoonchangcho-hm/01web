import React from 'react';
import ParentComp from './components/context1/ParentComp';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <>
      <PostProvider>
        <div>
          <h3>context api</h3>
        </div>
        <ParentComp />
      </PostProvider>
    </>
  );
}

export default App;
