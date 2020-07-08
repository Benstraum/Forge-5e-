import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
class SpellTabMapItem extends Component {
    secondClick = this.props.secondClick
    render() {
       let item = this.props.item
       let i = this.props.index
        let secondaryIndex = this.props.secondaryIndex
       
        return (
            <div className="spellItem" key={i}>
            <Accordion.Title
                active={secondaryIndex === i}
                index={i}
                onClick={this.secondClick}
            >
                <Icon name='dropdown' />
                <b>{item.spell_name}</b>
            </Accordion.Title>
            <Accordion.Content active={secondaryIndex === i} style={{border:'1px black'}}>
                <b>Classes that can use the spell:</b><br/> {item.classes.join(', ')}<br/>
                <b>components:</b> {item.Component|| 'none'}<br />
                <b>duration:</b> {item.duration}<br />
                <b>higher levels:</b> {item.higher_levels}<br/>
                <b>casting time:</b> {item.casting_time}<br />
                <b>spell range:</b> {item.spell_range}<br />
                <b>spell type: </b>{item.spell_type}<br />
                <b>description: </b>{item.description}<br />
            </Accordion.Content>
        </div>
        )
    }

}

export default SpellTabMapItem;