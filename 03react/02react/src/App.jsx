import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('이미지 파일업로드');
  const [text, setText] = useState('');
  const [preview, setPreview] = useState('');

  const fileChangeHandler = (e) => {
    // console.log(e.target.files[0]);
    const imageFile = e.target.files[0];
    console.log(URL.createObjectURL(imageFile));

    setFileName(imageFile.name);
    setFile(imageFile);
    setPreview(URL.createObjectURL(imageFile));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('test', text);

    console.log(formData);

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // alert('전송');

    // axios.post("경로",formData)
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
        <div>
          <label htmlFor="">name</label>
          <input
            type="text"
            id="testinput"
            onChange={() => {
              setText(e.target.value);
            }}
          />
        </div>
        <button type="submit">전송</button>
        {preview && <img src={preview} width={200} />}
      </form>
    </div>
  );
}

export default App;
