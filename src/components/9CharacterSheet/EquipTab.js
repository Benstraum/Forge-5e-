import React, {Component} from 'react'
import ConditionalItemInfo from '../ConditionalItemInfo/ConditionalItemInfo'
class EquipTab extends Component{
    render(){
        let char = this.props.char
        return(
        <div >
            <div className="equipment">
                        <h3><u>Equipment</u></h3>
                        <ConditionalItemInfo />
                        <p> {char.equipment}</p>
                    </div>
   
        </div>
        )
    }

}

export default EquipTab;