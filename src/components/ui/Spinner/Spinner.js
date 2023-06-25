import React from 'react';
import './Spinner.styles.css';

const Spinner = () => {
  return (
    <div className="loader">
      <div className="sk-chase">
        {
            Array(6).fill(1).map((item, i) => <div className="sk-chase-dot" key={i}/>)
        }
      </div>
    </div>
  );
};
export default Spinner;