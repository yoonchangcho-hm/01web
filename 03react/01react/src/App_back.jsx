import React from 'react';
import './App.css';

function App() {
  const viewText = '안녕하세요';
  const city = ['서울', '부산', '대구', '광주'];
  return (
    <>
      <div className="container">
        <h3>{viewText}</h3>
        <div className="row">
          {/* {city.map((item) => {return (<div>{item}</div>)})} */}
          {city.map((item, index) => {
            return (
              <>
                <div className="col">{item}</div>
              </>
            );
          })}
        </div>
      </div>
      ;
    </>
  );
}

export default App;
