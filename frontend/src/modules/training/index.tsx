import React, {useState} from 'react';
export const TrainingView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>TRAINING - Training - load, RPE, volume, intensity</h2><p>RPE</p></div>
};
export default TrainingView;
