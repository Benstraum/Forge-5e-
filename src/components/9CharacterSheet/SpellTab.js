import React, { Component } from 'react'
import { Accordion, Icon, Divider } from 'semantic-ui-react'
import SpellTabMapItem from './SpellTabMapItem/SpellTapMapItem'
import image from '../App/background.jpg'

class SpellTab extends Component {
    state = {
        spells: '',
        activeIndex: '',
        secondaryIndex: ''
    }
    //these control the accordian displaying on the dom based on which you click.
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ ...this.state, activeIndex: newIndex })
    }
    secondClick = (e, titleProps) => {
        const { index } = titleProps
        const { secondaryIndex } = this.state
        const newIndex = secondaryIndex === index ? -1 : index
        this.setState({ ...this.state, secondaryIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state
        const { secondaryIndex } = this.state
        let spells = this.props.spells
        let level =[0,1,2,3,4,5,6,7,8,9]
        return (
            <div >
                <div className="spells">
                    <h3><u>SpellBook</u></h3>
                    <Accordion styled >
                        {
                            level.map((Lv,index)=>(<div key={index} className="mappedLevels">
                                <Accordion.Title
                                active={activeIndex === Lv}
                                index={Lv}
                                onClick={this.handleClick}
                            >
                                <Icon name='dropdown' />
                                <h3 style={{color:'black'}}><b>Level {Lv} Spells</b></h3>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === Lv}>
                                <Accordion>
                                    {
                                        spells.filter(item => item.spell_level === Lv).map((item, i) => (
                                            <div key={i}>
                                                <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                                <Divider />
                                            </div>
                                        ))
                                    }
                                </Accordion>
                                <Divider />
                            </Accordion.Content>
                            </div>
                            ))
                        }
                    </Accordion>
                </div>

            </div>
        )
    }
}

export default SpellTab;