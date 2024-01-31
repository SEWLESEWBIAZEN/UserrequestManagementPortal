import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from 'react-router-dom';


const Progress = () => {
  const [progress, setProgress] = useState(0);
  const navigate=useNavigate()

  useEffect(() => {
    // Simulate progress (e.g., loading data, fetching API, etc.)
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress +15);
      } else {
        clearInterval(interval);
        navigate('/branch')        
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className='container'>      
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
};

export default Progress;
