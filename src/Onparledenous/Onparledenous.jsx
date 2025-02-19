import { memo } from 'react';
import './Onparledenous.css';
import foupatesserie from './fou-patesserie.svg'
import logocntraveler from './logo-cntraveler.svg'
import logoelle from './logo-elle.svg'
import logolemonde from './logo-lemonde.svg'
import logovogue from './logo-vogue.svg'

const Onparledenous = () => {
    return (
        <div className='conteneur-de-milieutage-tqt'>
            <div className='on-parle-de-nous'>
                <div>
                    <h1>On parle de nous</h1>
                    <p>Nos dernières parutions dans la presse et sur internet.</p>
                    <div className='on-parle-de-nous-logo-conteneur'>
                        <img loading="lazy" alt="logoelle logo" src={logoelle} />
                        <img loading="lazy" alt="logolemonde logo" src={logolemonde} />
                        <img loading="lazy" alt="logovogue logo" src={logovogue} />
                        <img loading="lazy" alt="logocntraveler logo" src={logocntraveler} />
                        <img loading="lazy" alt="foupatesserie logo" src={foupatesserie} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Onparledenous);