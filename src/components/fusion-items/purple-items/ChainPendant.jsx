import React from 'react'
import { returnStars } from '../../../utils/index'

const ChainPendant = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/chain-pendant.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1100 <span className="grn-txt">+740</span></p><p>Magic Attack 60 <span className="grn-txt">+40</span></p><p>Magic Armor 20 <span className="grn-txt">+15</span></p><p>Magic Pierce Rating 20 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/cap-of-souls.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/gem-of-vigor.png" width="36" height="36" alt="equipment icon" /><br /><img src="/assets/images/icons/equipment/strand-of-rejuvenation.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/spartan-helmet.png" width="36" height="36" alt="equipment icon" /><p>Level 79 Required</p>
            </div>
        </div>
    )
}

export default ChainPendant