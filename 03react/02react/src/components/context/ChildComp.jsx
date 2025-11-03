import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function ChildComp() {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      ChildComp111
      {/* {user?.name} */}
      {user ? (
        <div>
          {user.name} /{user.email}
        </div>
      ) : (
        <div>데이터 로딩중...</div>
      )}
    </div>
  );
}

export default ChildComp;
