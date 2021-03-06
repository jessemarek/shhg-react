import React from 'react'
import { returnStars } from '../../../utils/index'

const SongbirdRing = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/songbird-ring.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(7, 'enchant')}
                <p>Physical Attack 135 <span className="grn-txt">+119</span></p><p>Magic Armor 75 <span className="grn-txt">+70</span></p><p>Physical Crit Rating 95 <span className="grn-txt">+84</span></p><p>Control Time Reduction 10 <span className="grn-txt">+7</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/jupiter's-hammer.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/primordial-stone.png" width="36" height="36" alt="equipment icon" /><img src="/assets/images/icons/equipment/bandit's-dagger.png" width="36" height="36" alt="equipment icon" /><p>Level 97 Required</p>
            </div>
        </div>
    )
}

export default SongbirdRing