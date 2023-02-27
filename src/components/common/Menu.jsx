import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link as={Link} to="/" className="btn btn-ghost normal-case text-xl">Cafeteria</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link end to="/">Inicio</Link></li>
                <li><Link end to="/administrar">adminstrar</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;