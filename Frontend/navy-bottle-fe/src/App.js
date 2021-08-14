import React from 'react';
import {Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Jeonbuk from './pages/JeonbukCovid'
import Jeonnam from './pages/JeonnamCovid'
import Gwangju from './pages/GwangjuCovid'  

const App = () =>{
  return(
    <div className = "App">
      <Route exact component={MainPage} path="/"/>
      <Route component={Jeonbuk} path="/JeonbukCOVID"/>
      <Route component={Jeonnam} path="/JeonnamCOVID"/>
      <Route component={Gwangju} path="/GwangjuCOVID"/>
    </div>
  )
}

export default App;
