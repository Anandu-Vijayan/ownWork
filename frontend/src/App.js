import SignUp from "./Components/Signup/SignUp";
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup'element={<SignUp/>}/>
      <Route path='/login'element={<Login/>}/>
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
