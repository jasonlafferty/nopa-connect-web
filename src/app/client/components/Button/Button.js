import React from 'react';
import { Link } from 'react-router';

const Button = (props) => {
  return (
    <div className="">
      <Link {...props} className="button">
        {props.children}
      </Link>
    </div>
  )
};

export default Button;
