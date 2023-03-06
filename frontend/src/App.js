import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Add from './components/Add'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/register' element={<SignUp/>}></Route>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/add' element={< Add />}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
