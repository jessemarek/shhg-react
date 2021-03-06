import React from 'react'
import { returnStars } from '../../../utils/index'

const ZealotBattleplate = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/zealot-battleplate.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Max Health 1600 <span className="grn-txt">+1455</span></p><p>Physical Armor 65 <span className="grn-txt">+60</span></p><p>Magic Armor 20 <span className="grn-txt">+15</span></p><p>Health Recovery 600 <span className="grn-txt">+545</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/healing-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/sapphire-bracelet.png" width="36" height="36" alt="equipment icon" /><p>Level 83 Required</p>
            </div>
        </div>
    )
}

export default ZealotBattleplate