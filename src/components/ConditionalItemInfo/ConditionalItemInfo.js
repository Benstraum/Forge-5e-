import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ConditionalItemInfo.css'
import { Button } from 'semantic-ui-react'

class ConditionalItemInfo extends Component {
    state = {
        itemToLearn: '',
        category: '',
        learnMore: false,
        desc: {},
        showInfo: false,
        ac: '',
        url: ''
    }
    handleChange = (event, type) => {
        //created special handler for getting item info to avoid crashes
        type === 'url' ?
            this.specialUrlHandler(event, type)
            :
            this.setState({
                ...this.state,
                [type]: event.target.value,
                itemToLearn: '',
                showInfo: false

            })
    }
    specialUrlHandler = (event, type) => {
        //this was made to prep the state so it wouldnt error out when I inserted tried to display info
        this.props.dispatch({ type: 'FETCH_ITEMS', payload: event.target.value })
        this.setState({
            ...this.state,
            [type]: event.target.value,
            desc: this.props.item
        })
    }
    toggleLearn = () => {
        //this will start the conditional rendering chain to find equipment information. on toggling off it resets the sequence 
        this.state.learnMore ?
            this.setState({
                ...this.state,
                itemToLearn: '',
                category: '',
                url: '',
                learnMore: !this.state.learnMore,
                showInfo: false
            })
            :
            this.setState({
                ...this.state,
                learnMore: !this.state.learnMore,
            })
    }
    getItemDetails = () => {
        //this shows the information fetched onto the dom. had to be prepped in prior func will implement async funcs to better
        //accomplish same goal 
        this.props.dispatch({ type: 'FETCH_ITEMS', payload: this.state.url })
        this.setState({
            ...this.state,
            desc: this.props.item,
            showInfo: true
        })
    }
    render() {
        let desc = this.state.desc
        return (
            <div className="conditionalInfo">
                <Button fluid
                    style={{background:' black',color:'white', border:'3px solid maroon'}}
                    onClick={() => this.toggleLearn()}>{this.state.learnMore ? "Close More info" : "Click here to learn more about your equipment"}
                </Button>
                {/*these are the cascading choices. CATEGORY => CATEGORY ITEMS => BUTTON TO DISPLAY*/}
                {this.state.learnMore &&
                    <select value={this.state.category} placeholder="Armor" onChange={(event) => this.handleChange(event, 'category')}>
                        <option value="">select category</option>
                        <option value="GET_ARMORS">Armors</option>
                        <option value="GET_MARTIALS">martial weapons</option>
                        <option value="GET_SIMPLES">simple weapons</option>
                        <option value="GET_PACKS">equipment packs</option>
                    </select>

                }
                {this.state.category === "GET_ARMORS" && <>
                    <select value={this.state.itemToLearn.name} placeholder="Armor" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Armor choice</option>
                        {this.props.armors.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                </>
                }
                {this.state.category === 'GET_MARTIALS' && <>
                    <select value={this.state.itemToLearn.name} placeholder="Martial weapons" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Martial weapon choice</option>
                        {this.props.martials.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                </>
                }

                {this.state.category === 'GET_SIMPLES' && <>
                    <select value={this.state.itemToLearn.name} placeholder="Simple weapons" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Simple weapon choice</option>
                        {this.props.simples.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                </>
                }
                {this.state.category === 'GET_PACKS' &&
                    <select value={this.state.itemToLearn.name} placeholder="packs" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Equipment pack choice</option>
                        {this.props.packs.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                }
                {
                    this.state.url && <Button fluid 
                    style={{background:' black',color:'white', border:'3px solid maroon'}}
                    onClick={() => this.getItemDetails()}>Get the info!</Button>
                }
                {/* following conditionally rendered areas are based on category. will target relevant
                 information within and also conditionally render special features */}
                {this.state.showInfo && desc.equipment_category.name === 'Armor' &&
                    <ul>
                        <li>
                            <b>Name</b>: {desc.name}
                        </li>
                        <li>
                            <b>Armor type</b>: {desc.armor_category + ' Armor'}
                        </li>
                        <li>
                            <b>Armor class</b>: {desc.armor_class.base}{desc.armor_class.max_bonus ?
                                ' Max Dexterity Bonus ' + desc.armor_class.max_bonus
                                :
                                desc.armor_class.dex_bonus && '+ Dexterity Mod'}
                        </li>
                        <li>
                            <b>Weight</b>: {desc.weight + 'lbs '}{desc.str_minimum > 0 &&
                                "Strength Needed: " + desc.str_minimum}
                        </li>
                        <li>
                            <b>Cost</b>: {desc.cost.quantity + ' ' + desc.cost.unit}
                        </li>
                    </ul>
                }
                {this.state.showInfo && desc.equipment_category.name === 'Weapon' &&
                    <ul>
                        <li>
                            <b>Name</b>: {desc.name}
                        </li>
                        <li>
                            <b>Damage</b>: {desc.damage.damage_dice + ' ' + desc.damage.damage_type.name} <br />
                            {desc.properties.filter(obj =>( obj.name === 'Versatile' )) === true &&
                                'two-handed damage: ' + desc['2h_damage'].damage_dice}
                        </li>
                        <li>
                            <b>Ability Mod</b>: {desc.properties.filter(obj => { return obj.name === 'Finesse' }) === true ?
                                '+ Dex or Str Mod'
                                :
                                '+ Str Mod'}
                        </li>
                        <li>
                            <b>Range</b>: {desc.category_range + ', '} {desc.category_range.includes('Ranged') ?
                                `Normal Range: ${desc.range.normal} ft, Max Range: ${desc.range.long} ft`
                                :
                                `Range: ${desc.range.normal} ft`}
                        </li>
                        <li>
                            <b>Weight</b>: {desc.weight + 'lbs '}
                        </li>
                        <li>
                            <b>Cost</b>: {desc.cost.quantity + ' ' + desc.cost.unit}
                        </li>
                    </ul>
                }
                {
                    this.state.category === 'GET_PACKS' && this.state.showInfo &&
                    <ul>
                        <li><b>{desc.name}:</b> costs:{desc.cost.quantity + ' ' + desc.cost.unit}<br /> Includes:</li>
                        {desc.contents.map((item, i) => (<li key={i}>{'(' + item.quantity + ')'}{item.item_url.replace('/api/equipment/', '')}</li>))}
                    </ul>
                }
            </div>
        )
    }

}

const mapStateToProps = state => ({
    classes: state.classReducer,
    armors: state.initialApiGet.armors,
    martials: state.initialApiGet.martial,
    simples: state.initialApiGet.simple,
    shields: state.initialApiGet.shields,
    packs: state.initialApiGet.packs,
    item: state.itemInfo,
});
export default connect(mapStateToProps)(ConditionalItemInfo);