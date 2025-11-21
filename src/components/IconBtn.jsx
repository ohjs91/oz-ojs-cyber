import React from 'react';

const IconBtn = ({ disabled = false, children, size }) => {
  const buttonClasses = `icon-btn size-${size ? `${size}` : ''}`;
  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default IconBtn;
