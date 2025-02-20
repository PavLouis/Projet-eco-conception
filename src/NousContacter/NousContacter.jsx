import { memo } from 'react';
import './NousContacter.css';
import icoReseau from './icons.png'

const NousContacter = () => {
    return (
        <div>
            <div id='gray' className='conteneur-de-milieutage-tqt'>
                <div className='nous-contacter-ye'>
                    <div className="cenquantP">
                        <h1>Nous contacter</h1>
                        <div>
                            <p className='padding-text'>Pour toute réservation, nous vous invitions à contacter directement le restaurant par téléphone.</p>
                            <p>* champs obligatoires.</p>
                            <p>Nom / Prénom*</p>
                            <input className='petite-input'></input>
                            <p>Adresse e-mail*</p>
                            <input className='petite-input'></input>
                            <p>Message*</p>
                            <input className='grande-input'></input>
                        </div>
                    </div>
                    <div>
                        <h1>Nos coordonnées</h1>
                        <p><b>Siège Lugnac</b></p>
                        <p>4 rue Censier, Paris 7</p>
                        <p className='num-tel'>+33 (0)1 42 56 11 26</p>
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
                    <p>Fièrement propulsé par React !</p>
                </div>
            </ div>
        </div>
    );
};

export default memo(NousContacter);
