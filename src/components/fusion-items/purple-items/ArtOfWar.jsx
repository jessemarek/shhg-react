import React from 'react'

const ArtOfWar = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/art-of-war.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats</h3>
                <img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" /><img src="/assets/images/icons/hero-info/enchantment-star.png" width="12" height="12" />
                <p>Magic Attack 92 <span className="grn-txt">+60</span></p><p>Magic Armor 65 <span className="grn-txt">+45</span></p><p>Magic Crit Rating 15 <span className="grn-txt">+10</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" /><img src="/assets/images/icons/equipment/sage-wand.png" width="36" height="36" /><p>Level 80 Required</p>
            </div>
        </div>
    )
}

export default ArtOfWar