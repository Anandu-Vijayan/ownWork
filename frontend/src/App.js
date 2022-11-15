import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React from 'react'
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/home' element={ <Home/> }exact/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>


      </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
