import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { v4 as uuid } from 'uuid';
import { fetchData, setAuthor } from '../redux/actions';
import { NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';

export default function ProductList() {
  const [val, setVal] = useState('');
  const { author, records } = useSelector((state) => state.product);
  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();

    if (val === '') {
      alert('nothing entered');
    } else {
      dispatch(setAuthor(val));
    }

    setVal('');
  };

  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  const downloadProducts = (e) => {
    dispatch(fetchData());
  }

  return (
    <div>
      <div className='d-flex'>
        <small>{author}</small>
        <NavLink to="/author">to Admin</NavLink>
      </div>
      <hr />

      {records.map((item) => {
        return (
          <Product title={item.title} text={item.text} link={`/product/${item.id}`} key={uuid()} />
        );
      })}

      {loading ? <Loader/> : null}

      <br/>
      <hr/>

      <input type='text' name='author' onChange={changeHandler} value={val} />
      <button onClick={clickHandler}>Change Admin Name</button>

      <hr/>
      <button onClick={downloadProducts}>Download...</button>
    </div>
  );
}
