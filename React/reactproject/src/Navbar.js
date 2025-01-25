import Home from './Home';
import Contact from './contact';
import About from './about';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import User from './User';
import NewBook from './newBook';
import OldBook from './oldBook';
import LongForm from './LongForm';
import Form1 from './form';

function Navbar() {
    const navStyle = {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        padding: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    };

    const ulStyle = {
        listStyle: "none",
        display: "flex",
        gap: "20px",
        padding: 0,
        margin: 0,
    };

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        fontWeight: "bold",
    };

    const hoverStyle = {
        color: "blue",
    };

    return (
        <BrowserRouter>
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li><Link to="/" style={linkStyle}>HOME</Link></li>
                <li><Link to="/about" style={linkStyle}>ABOUT</Link></li>
                <li><Link to="/contact-us" style={linkStyle}>CONTACT</Link></li>
                <li><Link to="/user/10" style={linkStyle}>USER</Link></li>
                <li><Link to="/books/new-book" style={linkStyle}>NEW-BOOK</Link></li>
                <li><Link to="/books/old-book" style={linkStyle}>OLD-BOOK</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route> 
            <Route path='/contact-us' element={<Contact/>}></Route>
            <Route path='/user/:id' element={<User/>}></Route>
            <Route path='/LongForm' element={<LongForm/>}></Route>
            <Route path='/Form' element={<Form1/>}></Route>
            <Route path='/books'>
            <Route path='new-book' element={<NewBook/>}></Route>
            <Route path='old-book' element={<OldBook/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    );
}

export default Navbar;
