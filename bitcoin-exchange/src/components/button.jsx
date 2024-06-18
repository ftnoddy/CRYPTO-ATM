// Create this file if it doesn't exist: /components/ui/button.jsx

import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-500 text-white rounded-md py-2 px-4 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
