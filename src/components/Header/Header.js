import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.svg';

/* declaring the functional component (no state, 
    depend only on props from higher components) */
const Header = () => (
    <div className = "header">
        <img src={logoUrl} alt="Tesla" />
    </div>
)
export default Header;