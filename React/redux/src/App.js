import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {New,Home,About,Old} from './utils';
import User from './user';
import Login from './login';
import Fruit from './fruit';
import UpdateFruit from './updateFruit';
import ResetArray from './resetArray';
import Array from './array';

function App() {
  return (
    <BrowserRouter>
    <ul>
      <li><Link to ="/">Home</Link></li>
      <li><Link to ="/about">About</Link></li>
      <li><Link to ="/User">User</Link></li>
      <li><Link to ="/Book/new">New</Link></li>
      <li><Link to ="/Book/old">Old</Link></li>
      <li><Link to ="/login">Login</Link></li>
      <li><Link to ="/fruits">Fruits</Link></li>
      <li><Link to ="/updateFruit">Update Fruit</Link></li>
      <li><Link to ="/array">Array</Link></li>
      <li><Link to ="/resetArray">Reset Array</Link></li>
      
    </ul>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/User" element={<User />}></Route>
      <Route path="Book">
        <Route path="new" element={<New />}></Route>
        <Route path="old" element={<Old />}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path ='/updateFruit' element={<UpdateFruit />}></Route>
      <Route path ='/fruits' element={<Fruit />}></Route>
      <Route path='/array' element={<Array />}></Route>
      <Route path='/resetArray' element={<ResetArray />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
