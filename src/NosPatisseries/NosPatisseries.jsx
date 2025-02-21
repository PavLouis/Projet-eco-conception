import { memo } from 'react';
import './NosPatisseries.css';
import nospatisseries from './nos-patisseries.jpg'

const NosPatisseries = () => {
    return (
        <div id='gray-plus' className='conteneur-de-milieutage-tqt'>
            <div className='nos-Patisseries-conteneur'>
                <img loading="lazy" alt='le trée jolie gateux fais par notre amis le patisier' src={nospatisseries} />
                <div>
                    <h1>Nos Pâtisseries</h1>
                    <p>Créations originales, grands classiques revisités, gâteaux de voyage ou pour vos événements, découvrez le catalogue de nos produits disponibles en boutique...</p>
                </div>
            </div>
        </div>
    );
};

export default memo(NosPatisseries);