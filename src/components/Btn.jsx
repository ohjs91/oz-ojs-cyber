import React from 'react';
import { Link } from 'react-router-dom';
const Button = ({ type, disabled = false, children, color, to }) => {
  const buttonClasses = `btn btn-${type}${color ? ` ${color}` : ''}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
