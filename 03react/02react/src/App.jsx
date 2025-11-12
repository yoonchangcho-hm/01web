import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('이미지 파일업로드');

  const fileChangeHandler = (e) => {
    console.log(e.target.files[0]);
    const imageFile = e.target.files[0];
    setFileName(imageFile.name);
    setFile(imageFile);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    console.log(formData);

    // alert('전송');
  };

  return (
    <div>
      <h3>파일업로드</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="file">{fileName}</label>
          <br />
          <input type="file" id="file" onChange={fileChangeHandler} multiple />
        </div>
        {/* <div>
          <label htmlFor="">name</label>
          <input type="text" id="testinput" />
        </div> */}
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default App;
