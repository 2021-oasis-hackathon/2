import React from 'react';
import {Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Jeonbuk from './pages/Jeonbuk'
import Jeonnam from './pages/Jeonnam'
import Gwangju from './pages/Gwangju'  

const App = () =>{
  return(
    <div className = "App">
      <Route component={MainPage} path="/" exact={true}/>
      <Route component={Jeonbuk} path="/JeonbukCOVID"/>
      <Route component={Jeonnam} path="/JeonnamCOVID"/>
      <Route component={Gwangju} path="/GwangjuCOVID"/>
    </div>
  )
}

export default App;
