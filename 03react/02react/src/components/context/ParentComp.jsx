import React from 'react';
import ChildComp from './ChildComp';

function ParentComp() {
  return (
    <div>
      <h3>parent</h3>
      <ChildComp />
    </div>
  );
}

export default ParentComp;
