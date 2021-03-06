import React from 'react'
import { returnStars } from '../../../utils/index'

const EtherealCloak = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/ethereal-cloak.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1000 <span className="grn-txt">+760</span></p><p>Physical Armor 25 <span className="grn-txt">+20</span></p><p>Magic Armor 130 <span className="grn-txt">+100</span></p><p>Dodge Rating 20 <span className="grn-txt">+15</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/ethereal-cloak-fragment.png" width="36" height="36" alt="equipment icon" /> x 80<p>Level 86 Required</p>
            </div>
        </div>
    )
}

export default EtherealCloak