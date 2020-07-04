import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CharacterSheet.css'
import { Tab } from 'semantic-ui-react'
import StatAndSavesTab from './StatAndSavesTab'
import SkillsTab from './SkillsTab'
import EquipTab from './EquipTab'
import FeaturesTab from './FeaturesTab'

class CharacterSheet extends Component {
    state = {
        cSheet: this.props.cSheet,
        activeIndex: ''
    }
    componentDidMount() {
        this.props.dispatch({ type: 'RETRIEVE_SHEET' })
        this.props.dispatch({ type: 'GET_ALL_SKILLS' })
    }
    findMod = (stat) => {
        let mod = Math.floor((stat - 10) / 2)
        return mod
    }
    findArmorClass = (equip, char) => {
        let ac;
        equip.includes('leather armor') ?
            ac = (11 + this.findMod(char.dex))
            : console.log('next')
        equip.includes('chain mail') ?
            this.findMod(char.dex) > 2 ?
                ac = (13 + 2)
                :
                ac = (13 + this.findMod(char.dex))
            : console.log('next')
        equip.includes('chain mail') ?
            this.findMod(char.dex) > 2 ?
                ac = (14 + 2)
                :
                ac = (14 + this.findMod(char.dex))
            : console.log('next')
        equip.includes('scale mail') ?
            this.findMod(char.dex) > 2 ?
                ac = (14 + 2)
                :
                ac = (14 + this.findMod(char.dex))
            : console.log('next')

        return ac
    }
    calcStatBonus = (skill) => {
        let char = this.props.cSheet
        switch (skill.stat) {
            case 'str':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.findMod(char.str) + 2
                    return mod
                } else {
                    let mod = this.findMod(char.str)
                    return mod
                }
            case 'dex':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.findMod(char.dex) + 2
                    return mod
                } else {
                    let mod = this.findMod(char.dex)
                    return mod
                }
            case 'con':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.findMod(char.con) + 2
                    return mod
                } else {
                    let mod = this.findMod(char.con)
                    return mod
                }
            case 'int':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.findMod(char.int) + 2
                    return mod
                } else {
                    let mod = this.findMod(char.int)
                    return mod
                }
            case 'wis':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.findMod(char.wis) + 2
                    return mod
                } else {
                    let mod = this.findMod(char.wis)
                    return mod
                }
            case 'cha':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.findMod(char.cha) + 2
                    return mod
                } else {
                    let mod = this.findMod(char.cha)
                    return mod
                }
            default:
                return console.log('something is wrong')
        }
    }

    render() {
        let char = this.props.cSheet
        return (<div className="CharacterSheet">
            <div className="identity">
            </div>
            <Tab  menu={{ pointing: true }} panes={[{
                menuItem: 'Stats',
                render: () => <Tab.Pane style={{ backgroundColor:'lightgrey', height:'60vh', overflowY:'auto'}} attached={false}>
                    <StatAndSavesTab findMod={this.findMod} char={char} findArmorClass={this.findArmorClass} />
                </Tab.Pane>,
            }, {
                menuItem: 'Skills',
                render: () => <Tab.Pane style={{ backgroundColor:'lightgrey', height:'75vh', overflowY:'auto'}} attached={false}>
                    <SkillsTab  skills={this.props.skills} char={char} calcStatBonus={this.calcStatBonus} findMod={this.findMod} />
                </Tab.Pane>,
            }, {
                menuItem: 'Equipment',
                render: () => <Tab.Pane style={{ backgroundColor:'lightgrey', height:'60vh', overflowY:'auto'}} attached={false}>
                    <EquipTab char={char} />
                </Tab.Pane>,
            }, {
                menuItem: 'Features/Abilities',
                render: () => <Tab.Pane style={{ backgroundColor:'lightgrey', height:'75vh', overflowY:'auto'}} attached={false}>
                    <FeaturesTab char={char} />
                </Tab.Pane>,
            }]} />
        </div>
        )
    }

}
const mapStateToProps = state => ({
    cSheet: state.characterSheetReducer,
    skills: state.allSkills
});
export default connect(mapStateToProps)(CharacterSheet);