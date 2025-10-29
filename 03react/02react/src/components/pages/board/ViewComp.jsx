import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewComp({ API }) {
  // const param = useParams();
  // console.log(param);
  const { num } = useParams();
  console.log(num);

  useEffect(() => {
    const postFatch = async () => {
      const { data } = await axios.get(`${API}/posts/${num}`);
      console.log(data);
    };
    postFatch();
  }, []);
  return (
    <div>
      <h3>글보기 / {num}</h3>
      <div></div>
    </div>
  );
}

export default ViewComp;
