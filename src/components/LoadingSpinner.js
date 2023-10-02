// src/components/LoadingSpinner.js
import React from 'react';
import { TailSpin } from 'react-loader-spinner';

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <TailSpin color="#007BFF" height={50} width={50} />
    </div>
  );
}

export default LoadingSpinner;
