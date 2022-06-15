import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import User from './components/User';
import Menu from './components/Menu';
import Search from "./components/Search";


const PageNotFound = () => {
    return <h1>Page not found</h1>
}

const App = () => {

    return (
        <>
        <Menu/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/user/:fname/:lname' element={<User/>}/>
            <Route element={<PageNotFound/>}/>
        </Routes>
        </>
    );

}
export default App;

