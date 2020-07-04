import React, {Component} from 'react'

class SkillsTab extends Component{
    render(){
  
        return(
        <div >
             <div className="allSkills">
                        <h3><u>Skills</u></h3>
                        {this.props.skills.map((item, i) => (
                            <p key={i}><b>{item.skill_name}</b>: {this.props.calcStatBonus(item) > 0 && '+'}{this.props.calcStatBonus(item)}</p>
                        ))}
                    </div>
        </div>
        )
    }

}

export default SkillsTab;