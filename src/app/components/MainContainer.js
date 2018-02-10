import React from 'react';
import List from './List';
import View from './View';


import { BrowserRouter, Route} from 'react-router-dom';


export default class MainContainer extends React.Component{
 
  render(){
    return(
      <BrowserRouter>
      <div>
          <Route path="/" exact component={List}/>
          <Route path="/view" component={View}/>
      </div>
     </BrowserRouter>
    );
  }
}