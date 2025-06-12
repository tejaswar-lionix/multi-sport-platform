import React, {useState} from 'react';
export const AssessmentsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>ASSESSMENTS - Assessments - FMS, jump, sprint, VO2max</h2><p>FMS</p></div>
};
export default AssessmentsView;
