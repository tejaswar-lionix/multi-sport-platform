import React, {useState} from 'react';
export const MovementView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>MOVEMENT - Movement - GPS, accelerometry, jump, spr</h2><p>GPS</p></div>
};
export default MovementView;
