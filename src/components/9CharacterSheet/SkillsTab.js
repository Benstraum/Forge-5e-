import React, { Component } from 'react'
import { Grid, Divider, Icon } from 'semantic-ui-react'
import './CharacterSheet.css'
class SkillsTab extends Component {
    state = {
        skill: ''
    }
    calcStatBonus = (skill) => {
        //switch case based on stat type then adds the asociated modifier for that stat to find skills bonus
        //+2 is if they are proficient
        let char = this.props.char
        switch (skill.stat) {
            case 'str':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.props.findMod(char.str) + 2
                    return mod
                } else {
                    let mod = this.props.findMod(char.str)
                    return mod
                }
            case 'dex':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.props.findMod(char.dex) + 2
                    return mod
                } else {
                    let mod = this.props.findMod(char.dex)
                    return mod
                }
            case 'con':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.props.findMod(char.con) + 2
                    return mod
                } else {
                    let mod = this.props.findMod(char.con)
                    return mod
                }
            case 'int':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.props.findMod(char.int) + 2
                    return mod
                } else {
                    let mod = this.props.findMod(char.int)
                    return mod
                }
            case 'wis':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.props.findMod(char.wis) + 2
                    return mod
                } else {
                    let mod = this.props.findMod(char.wis)
                    return mod
                }
            case 'cha':
                if (char.skills.includes(skill.skill_name) || char.features_class.includes(skill.skill_name) || char.features_race.includes(skill.skill_name)) {
                    let mod = this.props.findMod(char.cha) + 2
                    return mod
                } else {
                    let mod = this.props.findMod(char.cha)
                    return mod
                }
            default:
                return console.log('something is wrong')
        }
    }
    learnMore = (item) => {

        this.setState({
            ...this.state,
            skill: item
        })
    }
    render() {
        return (
            <div className='skillPage' >   
                    <Grid columns={2} divided>
                    <Grid.Row style={{marginLeft:'20vw'}}> <p><i>Click on the <Icon name='question circle' /> icons for more info</i></p></Grid.Row>
                        <Grid.Row>
                            <Grid.Column >
                                <div className="skillName">
                                <h3><u>Skills & Bonus</u></h3>
                                {this.props.skills.map((item, i) => (<div key={i}> 
                                    <p  onClick={()=>this.learnMore(item)}><Icon name='question circle' /><br/><b>{item.skill_name}</b>: {this.calcStatBonus(item) > 0 && '+'}{this.calcStatBonus(item)}</p>
                                    <Divider />
                                </div>
                                ))}
                                </div>
                            </Grid.Column>
                            <Grid.Column >
                                <div className="skillDef">
                                    {this.state.skill && <p><b>{this.state.skill.skill_name}</b>
                                        <br />{this.state.skill.description}</p>}
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            </div>
        )
    }

}

export default SkillsTab;