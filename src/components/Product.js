import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Product(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <NavLink to={props.link}>details</NavLink>
    </div>
  );
}
