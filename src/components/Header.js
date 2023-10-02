// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <h1>Online Bookstore</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/books">Books</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
