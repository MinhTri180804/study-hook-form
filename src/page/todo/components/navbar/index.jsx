import React from 'react';
import PropTypes from 'prop-types';
import './style.css'

Navbar.propTypes = {
    
};

function Navbar(props) {
    return (
        <div className='navbar'>
            <ul className="list__item-navbar">
                <li className="item-navbar">
                    Home
                </li>
                
                <li className="item-navbar">
                    Todo List
                </li>

            </ul>
        </div>
    );
}

export default Navbar;