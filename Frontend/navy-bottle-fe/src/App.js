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
      <Route component={Jeonbuk} path="/JeonbukCOVID" render={props => <Jeonbuk {...props}/>}/>
      <Route component={Jeonnam} path="/JeonnamCOVID" render={props => <Jeonnam {...props}/>}/>
      <Route component={Gwangju} path="/GwangjuCOVID" render={props => <Gwangju {...props}/>}/>
    </div>
  )
}

export default App;
