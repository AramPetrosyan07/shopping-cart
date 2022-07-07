import React from 'react';
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ShoppingCard } from './pages/ShoppingCard';
import { useState } from "react";

function App() {
    const [shop, setShop] = useState([]);
    const hadleClick = (el) => {
        if (shop.includes(el)) {
            console.log("ka");
            // el.count += 1;
        } else {
            setShop([...shop, el])
        }
    }
    console.log(shop);
    return (
        <>
            <div className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/about'>About</Link>
                <Link to='/shoppingcard'>ShoppingCard</Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products hadleClick={hadleClick} />} />
                <Route path='/about' element={<About />} />
                <Route path='/shoppingcard' element={<ShoppingCard shop={shop} />} />
            </Routes>

        </>
    );
}

export default App;
