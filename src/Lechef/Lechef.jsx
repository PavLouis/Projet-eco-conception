import { memo } from 'react';
import './Lechef.css';
import lechefcitronImg from './le-chef-1.jpg'
import lechefbgImg from './le-chef-2.jpg'

const NavBar = () => {
    return (
        <div className='conteneur-de-milieutage-tqt'>
            <div className='le-chef-conteneur'>
                <div className='le-chef-text-conteneur'>
                    <h1>Le chef</h1>
                    <p>Philippe Lugnac s'amuse autant à inventer qu'à réinventer, faire briller le répertoire classique parisien, visiter de nouvelles terres avec attention et donner de l'éclat aux soirées festives qui se prolongent.</p>
                    <img alt="un grand chef qui zeste du citron sur un gateaux" src={lechefcitronImg}></img>
                </div>
                <div className='le-chef-deusieme-partie'>
                    <img alt='un magnifique chef patissier fierre de son travaille' src={lechefbgImg}></img>
                </div>
            </div>
        </div>
    );
};

export default memo(NavBar);
