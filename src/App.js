import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Component/Home/Header/Header';
import Login from './Component/Login/Login';
import Details from './Component/Details/Details';
import Delivery from './Component/Delivery/Delivery';
import { createContext, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import NotFound from './Component/NotFound/NotFound';

export const userContext=createContext();

function App() {
  const [log,setLog]=useState({});
  const [itemInfo,setItemInfo]=useState({});
  return (
    <userContext.Provider value={{ logIn: [log,setLog], itemInformation: [itemInfo,setItemInfo] }} >
  <Router>
    <Switch>
      <Route exact path='/'>
 <Header></Header>
      </Route>
      <Route  path='/Home'>
 <Header></Header>
      </Route>
      <PrivateRoute path='/Details'>
        <Details></Details>
      </PrivateRoute>
      <Route path='/Login'>
        <Login></Login>
      </Route>
      <Route path='/Delivery'>
     <Delivery></Delivery>
      </Route>
      <Route path='/*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>
    </userContext.Provider>

  );
}

export default App;
