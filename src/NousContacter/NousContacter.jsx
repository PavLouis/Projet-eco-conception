import { memo } from 'react';
import './NousContacter.css';
import icoReseau from './icons.png'

const NousContacter = () => {
    return (
        <div>
            <div id='gray' className='conteneur-de-milieutage-tqt'>
                <div className='nous-contacter-ye'>
                    <h1>Nous contacter</h1>
                    <div>
                        <p>Pour toute réservation, nous vous invitions à contacter directement le restaurant par téléphone.</p>
                        <p>* champs obligatoires.</p>
                        <p>Nom / Prénom*</p>
                        <input className='petite-input'></input>
                        <p>Adresse e-mail*</p>
                        <input className='petite-input'></input>
                        <p>Message*</p>
                        <input className='grande-input'></input>
                    </div>
                </div>
            </div>
            <div id='gray-plus' className='conteneur-de-milieutage-tqt'>
                <div className='retrouver-nous'>
                    <h2>Retrouvez-nous</h2>
                    <img alt='reseaux' src={icoReseau} />
                </div>
            </div>
            <div id='gray' className='conteneur-de-milieutage-tqt'>
                <div className='footer-montionlegale'>
                    <p>Mentions légales</p>
                    <p>Fièrement propulsé par WordPress</p>
                </div>
            </ div>
        </div>
    );
};

export default memo(NousContacter);
