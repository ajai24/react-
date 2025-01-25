import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Contact from './contact';
import About from './about';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import User from './User';
import NewBook from './newBook';
import OldBook from './oldBook';
import LongForm from './LongForm';

function NestedRouter() {
    return (
        <>
        <h1>welcome to the cls</h1>
        <BrowserRouter>
        <ul>
        <li><Link to="/">HOME</Link> </li>
        <li><Link to="/about">ABOUT</Link> </li>
        <li><Link to="/contact-us">CONTACT</Link> </li> 
        <li><Link to="/user/10">USER 10</Link> </li> 
        <li><Link to="/user/13">USER 13</Link> </li> 
        <li><Link to="/user/134">USER 134</Link> </li> 
        <li><Link to="/books/new-book">NEW-BOOK</Link> </li>
        <li><Link to="/books/old-book">OLD-BOOK</Link> </li>
        
        </ul>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route> 
            <Route path='/contact-us' element={<Contact/>}></Route>
            <Route path='/user/:id' element={<User/>}></Route>
            <Route path='/LongForm' element={<LongForm/>}></Route>
            <Route path='/books'>
            <Route path='new-book' element={<NewBook/>}></Route>
            <Route path='old-book' element={<OldBook/>}></Route>
            </Route>
            </Routes>
        </BrowserRouter>
        <div>
            <h1>Home Page</h1>
        </div>
        </>
    )
    
    }

    export default NestedRouter;