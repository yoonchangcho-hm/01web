import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ViewComp() {
  const { num } = useParams(); // URL 파라미터
  const [post, setPost] = useState(null); // 글 데이터 저장

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${num}`
        );
        // userId를 글번호(num)와 같게 강제로 맞춤
        setPost({ ...data, userId: Number(num) });
      } catch (error) {
        console.error('데이터 불러오기 실패:', error);
      }
    };
    fetchPost();
  }, [num]);

  return (
    <div>
      <h3>글보기 / {num}</h3>
      {post && (
        <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <small>작성자 ID: {post.userId}</small>
        </div>
      )}
    </div>
  );
}

export default ViewComp;
