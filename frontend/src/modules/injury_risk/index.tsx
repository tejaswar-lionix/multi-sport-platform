import React, {useState} from 'react';
export const Injury_riskView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INJURY_RISK - Injury risk - load patterns, ACWR, monot</h2><p>ACWR</p></div>
};
export default Injury_riskView;
