import React, {Component} from 'react'

class StatAndSavesTab extends Component{
    render(){
        let char = this.props.char
        return(
        <div >
            <h3> {char.name} the {char.race} {char.class}: Lv:1</h3>
             <div className="combatStats">
                <h5>Health Pool:{char.total_health}</h5>
                <h5>Armor Class:{this.props.findArmorClass(char.equipment, char)} {char.equipment.includes('shield') && `| with shield: ${this.props.findArmorClass(char.equipment, char) + 2}`}</h5>
            </div>
                    <div className="abilityScores">
                        <h4><u>Ability Scores</u></h4>
                        <p><b>Strength</b>:{char.str} | {this.props.findMod(char.str) > 0 && '+'}{this.props.findMod(char.str)} </p>
                        <p><b>Dexterity</b>:{char.dex} | {this.props.findMod(char.dex) > 0 && '+'} {this.props.findMod(char.dex)} </p>
                        <p><b>Constitution</b>:{char.con} |  {this.props.findMod(char.con) > 0 && '+'}{this.props.findMod(char.con)} </p>
                        <p><b>Intelligence</b>:{char.int} |{this.props.findMod(char.int) > 0 && '+'}{this.props.findMod(char.int)} </p>
                        <p><b>Wisdom</b>:{char.wis} | {this.props.findMod(char.wis) > 0 && '+'}{this.props.findMod(char.wis)} </p>
                        <p><b>Charisma</b>:{char.cha} |  {this.props.findMod(char.cha) > 0 && '+'}{this.props.findMod(char.cha)} </p>
                    </div>
        </div>
        )
    }

}

export default StatAndSavesTab;