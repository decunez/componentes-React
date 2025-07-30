import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  name, 
  className,
  required = false,
  minLength,
  maxLength,
  pattern
}) => {
  return (
    <input
      type={type}
      className={`form-control ${className || ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
    />
  );
};

export default Input;