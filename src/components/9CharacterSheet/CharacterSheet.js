import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CharacterSheet.css'

class CharacterSheet extends Component {
    state = {
        cSheet: this.props.cSheet
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

        return ac
    }
    calcStatBonus = (skill) => {
        let char = this.props.cSheet
        switch (skill.stat) {
            case 'str':
            if(char.skills.includes(skill.skill_name)||char.features_class.includes(skill.skill_name)||char.features_race.includes(skill.skill_name)){
                let mod = this.findMod(char.str)+2
                return mod
            }else{
                let mod = this.findMod(char.str)
                return mod
            }
            case 'dex':
                if(char.skills.includes(skill.skill_name)||char.features_class.includes(skill.skill_name)||char.features_race.includes(skill.skill_name)){
                    let mod = this.findMod(char.dex)+2
                    return mod
                }else{
                    let mod = this.findMod(char.dex)
                    return mod
                }
            case 'con':
                if(char.skills.includes(skill.skill_name)||char.features_class.includes(skill.skill_name)||char.features_race.includes(skill.skill_name)){
                    let mod = this.findMod(char.con)+2
                    return mod
                }else{
                    let mod = this.findMod(char.con)
                    return mod
                }
            case 'int':
                if(char.skills.includes(skill.skill_name)||char.features_class.includes(skill.skill_name)||char.features_race.includes(skill.skill_name)){
                    let mod = this.findMod(char.int)+2
                    return mod
                }else{
                    let mod = this.findMod(char.int)
                    return mod
                }
            case 'wis':
                if(char.skills.includes(skill.skill_name)||char.features_class.includes(skill.skill_name)||char.features_race.includes(skill.skill_name)){
                    let mod = this.findMod(char.wis)+2
                    return mod
                }else{
                    let mod = this.findMod(char.wis)
                    return mod
                }
            case 'cha':
                if(char.skills.includes(skill.skill_name)||char.features_class.includes(skill.skill_name)||char.features_race.includes(skill.skill_name)){
                    let mod = this.findMod(char.cha)+2
                    return mod
                }else{
                    let mod = this.findMod(char.cha)
                    return mod
                }
            default:
                return console.log('something is wrong')
        }
    }
    render() {
        let char = this.props.cSheet
        console.log(char.features_class)
        return <div className='CharacterSheet'>
            <div className="identity">
                <h3>{char.name} the {char.race}, {char.class} </h3>
                <p>level: 1</p>
            </div>
            <div className="combatStats">
                <h5>Health Pool:{char.total_health}</h5>
                <h5>Armor Class:{this.findArmorClass(char.equipment, char)}</h5>
            </div>
            <div className="abilityScores">
                <h4><u>Ability Scores</u></h4>
                <p><b>Strength</b>:{char.str} | modifier: {this.findMod(char.str)} </p>
                <p><b>Dexterity</b>:{char.dex} | modifier: {this.findMod(char.dex)} </p>
                <p><b>Constitution</b>:{char.con} | modifier: {this.findMod(char.con)} </p>
                <p><b>Intelligence</b>:{char.int} | modifier: {this.findMod(char.int)} </p>
                <p><b>Wisdom</b>:{char.wis} | modifier: {this.findMod(char.wis)} </p>
                <p><b>Charisma</b>:{char.cha} | modifier: {this.findMod(char.cha)} </p>
            </div>
            <div className="skills">
                <h3><u>Skills</u></h3>
                {this.props.skills.map((item, i) => (
                    <p key={i}><b>{item.skill_name}</b>: {this.calcStatBonus(item)}</p>
                ))}
            </div>
            <div className="equipment">
                    <h3><u>Equipment</u></h3>
                   <p> {char.equipment}</p>
            </div>
            <div className="features">
                    <h3><u>Racial Features</u></h3>
                   <p> {char.features_race}</p>
                   <h3><u>Class Features</u></h3>
                    <p>{char.features_class.replace('{"'+'','').replace('"}','')}</p>
            </div>
        </div>
    }

}
const mapStateToProps = state => ({
    cSheet: state.characterSheetReducer,
    skills: state.allSkills
});
export default connect(mapStateToProps)(CharacterSheet);