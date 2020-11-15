import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Details(props) {
  const state = useSelector((state) => state.product.records);
  let item = state.filter((el) => String(el.id) === String(props.match.params.id))[0];

  return (
    <div>
      <div className='d-flex'>
      <small>product details</small>
        <NavLink to='/'>to Home</NavLink>
      </div>
      <h1>{item.title}</h1>
      <p>{item.text}</p>
    </div>
  );
}
