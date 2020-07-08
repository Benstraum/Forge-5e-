import React, {Component} from 'react'
import ConditionalItemInfo from '../ConditionalItemInfo/ConditionalItemInfo'
import {TextArea} from 'semantic-ui-react'
class EquipTab extends Component{
    state={
        equipment:''
    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: parseInt(event.target.value)
        })
    }
    //will create a put request so users can update their equipment for higher levels 
    render(){
        let char = this.props.char
        return(
        <div >
            <div className="equipment">
                        <h3><u>Equipment</u></h3>
                        <TextArea rows={5}
                         style={{width:'92vw'}} 
                         defaultValue={char.equipment} 
                         onChange={(event) => this.handleChange(event, 'equipment')} />
                        <ConditionalItemInfo />
                    </div>
   
        </div>
        )
    }

}

export default EquipTab;