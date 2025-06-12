import React, {useState} from 'react';
export const BiometricsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>BIOMETRICS - Biometrics - HR, HRV, sleep, skin temp</h2><p>HR</p></div>
};
export default BiometricsView;
