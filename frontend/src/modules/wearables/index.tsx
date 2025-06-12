import React, {useState} from 'react';
export const WearablesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>WEARABLES - Wearables - Garmin, Whoop, Catapult, Pol</h2><p>Garmin</p></div>
};
export default WearablesView;
