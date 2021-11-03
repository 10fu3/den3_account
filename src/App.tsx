import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import {Login} from "./page/Login";
import {Register} from "./page/Register";
import {Main} from "./page/Main";

const App = ()=>{

  const css = {
    height:"100vh"
  };

  return <div style={css}>
    <BrowserRouter>
      <Route path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route path="/" component={Main}/>

    </BrowserRouter>
  </div>
}

export default App;
