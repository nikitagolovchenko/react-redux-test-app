import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Author() {
  const author = useSelector((state) => state.product.author);

  return (
    <>
      <div className='d-flex'>
        <p>Hello:</p>
        <NavLink to='/'>to Home</NavLink>
      </div>
      <h1>{author}</h1>
    </>
  );
}
