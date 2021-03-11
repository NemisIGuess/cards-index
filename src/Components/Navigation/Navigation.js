import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <Link className="navigation-link" to="/">
          <li>Home</li>
        </Link>
        <Link className="navigation-link" to="/units">
          <li>Unidades</li>
        </Link>
        <Link className="navigation-link" to="/lands">
          <li>Tierras</li>
        </Link>
        <Link className="navigation-link" to="/spells">
          <li>Hechizos</li>
        </Link>
        <Link className="navigation-link" to="/rules">
          <li>Reglas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;