import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CharacterSheet.css'
import { Tab } from 'semantic-ui-react'
import StatAndSavesTab from './StatAndSavesTab'
import SkillsTab from './SkillsTab'
import EquipTab from './EquipTab'
import FeaturesTab from './FeaturesTab'
import SpellTab from './SpellTab'
import image from '../App/background.jpg'

class CharacterSheet extends Component {
    state = {
        cSheet: this.props.cSheet,
        activeIndex: ''
    }
    componentDidMount() {
        //gets character info and all skills and spells
        this.props.dispatch({ type: 'RETRIEVE_SHEET' })
        this.props.dispatch({ type: 'GET_ALL_SKILLS' })
        this.props.dispatch({ type: 'GET_ALL_SPELLS' })
    }
    findMod = (stat) => {
        let mod = Math.floor((stat - 10) / 2)
        return mod
    }
    findArmorClass = (equip, char) => {
        //sorts through equipment applying proper armor class with dex mod to their character
        // it goes with highest armor first when checking for when characters get more equip but 
        //will make ac changable 
        let ac;
        switch (true) {
            case equip.includes('chain mail'):
                this.findMod(char.dex) > 2 ?
                    ac = (14 + 2)
                    :
                    ac = (14 + this.findMod(char.dex))
                return ac
            case equip.includes('scale mail'):
                this.findMod(char.dex) > 2 ?
                    ac = (14 + 2)
                    :
                    ac = (14 + this.findMod(char.dex))
                return ac
            case equip.includes('leather armor'):
                ac = (11 + this.findMod(char.dex))
                return ac
            default:
                return 10 + this.findMod(char.dex)
        }
    }
    render() {
        let char = this.props.cSheet
        return (<div className="CharacterSheet" >
            <Tab style={{width:'100vw'}}  menu={{ pointing: true }}  panes={[{
                menuItem: 'Stats',
                render: () => <Tab.Pane style={{backgroundImage: 'url('+image+')', backgroundColor: 'lightgrey', height: '80vh',overflowY: 'auto' }} attached={false}>
                    <StatAndSavesTab char={char} findArmorClass={this.findArmorClass} />
                </Tab.Pane>,
            }, {
                menuItem: 'Skills',
                render: () => <Tab.Pane style={{backgroundImage: 'url('+image+')', backgroundColor: 'lightgrey', height: '75vh', overflowY: 'auto' }} attached={false}>
                    <SkillsTab skills={this.props.skills} char={char} findMod={this.findMod} />
                </Tab.Pane>,
            }, {
                menuItem: 'Backpack',
                render: () => <Tab.Pane style={{backgroundImage: 'url('+image+')', backgroundColor: 'lightgrey', height: '60vh', overflowY: 'auto' }} attached={false}>
                    <EquipTab char={char} />
                </Tab.Pane>,
            }, {
                menuItem: 'Features',
                render: () => <Tab.Pane style={{backgroundImage: 'url('+image+')', backgroundColor: 'lightgrey', height: '75vh', overflowY: 'auto' }} attached={false}>
                    <FeaturesTab char={char} />
                </Tab.Pane>,
            },
            {
                menuItem: 'Spells',
                render: () => <Tab.Pane style={{backgroundImage: 'url('+image+')', backgroundColor: 'lightgrey', height: '75vh', overflowY: 'auto' }} attached={false}>
                    <SpellTab spells={this.props.spells} char={char} />
                </Tab.Pane>,
            }]} />
        </div>
        )
    }
}
const mapStateToProps = state => ({
    cSheet: state.characterSheetReducer,
    skills: state.allSkills,
    spells:state.allSpells
});
export default connect(mapStateToProps)(CharacterSheet);