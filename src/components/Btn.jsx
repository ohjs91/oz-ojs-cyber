import React from 'react';

const Button = ({ type, disabled = false, children, color }) => {
  const buttonClasses = `btn btn-${type}${color ? ` ${color}` : ''}`;
  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
