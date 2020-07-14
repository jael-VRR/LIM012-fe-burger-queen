
import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './components/main.jsx';
import NavBar from './components/navBar.jsx';
import ListMain from './components/listMain.jsx';
import Modal from './components/modal.jsx';


class App extends React.Component{
  render(){
  return (
    <div>
    <header className="App-header d-flex">
      <NavBar title="BURGUER QUEEN"/>
    </header>
   <Router >
   <Switch>
   <Route path="/main">
   <Main/>
   </Route>
   <Route path="/listMain">
   <ListMain/>
   </Route>
   <Route path="/modal">
   <Modal/>
   </Route>
  </Switch>
 </Router>
 </div>
  );
}
}
export default App;
