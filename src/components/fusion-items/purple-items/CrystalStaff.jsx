import React from 'react'
import { returnStars } from '../../../utils/index'

const CrystalStaff = () => {

    return (
        <div className="fusion-item">
            <img src="/assets/images/icons/equipment/crystal-staff.png" alt="equipment icon" />

            <div className="tooltip">
                <h3>Stats <span className="grn-txt">+ Max Enchant</span></h3>
                {returnStars(5, 'enchant')}
                <p>Magic Attack 85 <span className="grn-txt">+65</span></p>
                <h3>Recipe</h3>
                <img src="/assets/images/icons/equipment/crystal-staff-fragment.png" width="36" height="36" alt="equipment icon" /> x 30<p>Level 53 Required</p>
            </div>
        </div>
    )
}

export default CrystalStaff