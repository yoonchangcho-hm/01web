import React from 'react';
import { usePost } from '../../context/PostContext';

function ChildComp() {
  const text = usePost();
  return <div>ChildComp / {text}</div>;
}

export default ChildComp;
