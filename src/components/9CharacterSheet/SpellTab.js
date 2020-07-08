import React, { Component } from 'react'
import { Accordion, Icon, Divider } from 'semantic-ui-react'
import SpellTabMapItem from './SpellTabMapItem/SpellTapMapItem'

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
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>1st Level Spells</b>
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
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>2nd Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 2).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 3}
                            index={3}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>3rd Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 3).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 4}
                            index={4}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>4th Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 4).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 5}
                            index={5}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>5th Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 5}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 5).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 6}
                            index={6}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>6th Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 6}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 6).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 7}
                            index={7}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>7th Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 7}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 7).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 8}
                            index={8}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>8th Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 8}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 8).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                        <Accordion.Title
                            active={activeIndex === 9}
                            index={9}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            <b>9th Level Spells</b>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 9}>
                            <Accordion style={{ marginLeft: '20px' }}>
                                {
                                    spells.filter(item => item.spell_level === 9).map((item, i) => (
                                        <div key={i}>
                                            <SpellTabMapItem item={item} index={i} secondClick={this.secondClick} secondaryIndex={secondaryIndex} />
                                            <Divider />
                                        </div>
                                    ))
                                }
                            </Accordion>
                            <Divider />
                        </Accordion.Content>
                        <Divider />
                    </Accordion>
                </div>

            </div>
        )
    }
}

export default SpellTab;