import React from 'react';

function Button({ title = '글작성', color = 'skyblue', width = '100' }) {
  //   console.log(props);
  console.log(title, color, width);
  const btnStyle = {
    width: `${width}px`,
    background: color,
  };

  return <div style={btnStyle}>{title}</div>;
}

export default Button;
