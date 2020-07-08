import React, { Component } from 'react'
import { Accordion, Icon, Divider } from 'semantic-ui-react'
import SpellTabMapItem from './SpellTabMapItem/SpellTapMapItem'

class SpellTab extends Component {
    state = {
        spells: '',
        activeIndex: '',
        secondaryIndex: ''
    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: parseInt(event.target.value)
        })
    }
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
        console.log(spells)
        return (
            <div >
                <div className="spells">
                    <h3><u>SpellBook</u></h3>
                    <Accordion>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>Cantrips (level 0 spells)</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 0).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>

                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>Level 1 Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 1).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>

                        </Accordion.Content>

                    </Accordion>
                </div>

            </div>
        )
    }
}

export default SpellTab;