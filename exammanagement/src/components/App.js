import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Home/Header';
import history from '../history';
import Signup from './Signup';
import Login from './Login';
import Instruction from './exam/Instruction';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Questions from './exam/Questions';

const App = () => {
  return (
    <div>
      <BrowserRouter history={history}>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/startexam" component={Instruction} />
      </BrowserRouter>
    </div>
  );
};

export default App;
