import React from 'react';
import './App.css'
import Main from './components/Main'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
/*we can treat them as components; HasRouter to wrap out entire app in to create the routing environment, 
Routes specify all potential routes for our router
Route for each individual page */
import { Home } from './pages/home';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';

export default function App(){
  return (
<div>
  <Main />
  
  <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        /*you want a default path of foward slash 
        we want to render the component home */
        <Route path="/Page1" element={<Page1/>}/>
        <Route path="/Page2" element={<Page2/>}/>
      </Routes>
  </Router>
  
</div>


  )
}



