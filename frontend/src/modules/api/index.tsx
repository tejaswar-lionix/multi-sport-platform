import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for athletes, training, risk</h2><p>POST athlete</p></div>
};
export default ApiView;
