import React from 'react';
const Button = ({
  uiType,
  disabled = false,
  children,
  className,
  type = 'button',
}) => {
  return (
    <button
      className={`btn ${uiType ? `btn-${uiType}` : ''} ${className ? className : ''}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
