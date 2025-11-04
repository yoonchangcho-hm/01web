import React, { createContext } from 'react';
import ParentComp from './components/context/ParentComp';
// import { UserProvider } from './context/UserContext';

// const UserContext = createContext();

// function App() {
//   return (
//     <UserContext.Provider valuew="홍길동">
//       <ParentComp />
//     </UserContext.Provider>
//   );
// }

import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <ParentComp />
    </UserProvider>
  );
}

export default App;
