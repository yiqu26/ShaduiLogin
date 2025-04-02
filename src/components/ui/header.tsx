// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
                <img src="https://t4.ftcdn.net/jpg/06/22/54/35/360_F_622543569_JRXraViuj97yT0kAzZuBiOuUaIx1vSt0.jpg" alt="Marugame Logo" className="h-12" />
                <div className="space-x-6">
                    <Button variant="link">
                        <li><Link to="/">Home</Link></li>
                    </Button>
                    <Button variant="link">
                        <li><Link to="/layout">Introduction</Link></li>
                    </Button>
                    <Button variant="link">
                        <li><Link to="/login">Account</Link></li>
                    </Button>
                    <Button variant="link">
                        <li><Link to="/about">About</Link></li>
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
export { }
