import React from 'react';

const IconBtn = ({ disabled = false, children, size, className }) => {
  const buttonClasses = `icon-btn size-${size ? `${size}` : ''} ${className || ''}`;
  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default IconBtn;
