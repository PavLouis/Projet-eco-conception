import { memo } from 'react';
import './NavBar.css';
import tarte from './tarte.png';

const NavBar = () => {
  return (
    <div className="nav-bar-conteneur">
      <div className='nav-bar-ico'>
        <img src={tarte} alt="Tarte Icon" className="titre-tarte-ico" aria-label="Tarte Icon" />
        <h1 className="titre">Philippe Lugnac</h1>
        <img src={tarte} alt="Tarte Icon" className="titre-tarte-ico" aria-label="Tarte Icon" />
      </div>
      <div className='nav-bar-ico'>
        <p className='nav-bar-text'>Le chef</p>
        <p className='nav-bar-text'>Nos pâtisseries</p>
        <p className='nav-bar-text'>Où nous trouver</p>
        <p className='nav-bar-text'>Nous contacter</p>
      </div>
    </div>
  );
};

export default memo(NavBar);
