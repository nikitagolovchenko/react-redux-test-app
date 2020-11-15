import React from 'react'
import ProductList from './components/ProductList'
import Author from './components/Author'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Details from './components/Details';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route exact path='/author' component={Author}/>
          <Route exact path='/product/:id' component={Details}/>
          <Route>
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

