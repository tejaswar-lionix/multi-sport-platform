import React, {useState} from 'react';
export const IntegrationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INTEGRATIONS - Integrations - Garmin, Apple Health, Cat</h2><p>Garmin</p></div>
};
export default IntegrationsView;
