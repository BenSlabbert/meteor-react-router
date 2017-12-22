import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><Link to="/settings">settings</Link></li>
            </ul>
        </div>
    );
};

export default Header;
