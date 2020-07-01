import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Skills.css'
class Skills extends Component {
    state = {
        skill: '',
        choice_one: '',
        choice_two: '',
        choice_three: ''
    }

    learnMore = (item) => {
        //make get request matching skill name to skill name in  table and return description
        this.props.dispatch({ type: 'GET_DEFINITION', payload: item })
        console.log(this.props.skill)
        this.setState({
            ...this.state,
            skill: item
        })
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    submitChoices = () => {
        let skillArr =[]
            skillArr.push(this.state.choice_one)
            skillArr.push(this.state.choice_two)

            this.state.choice_three && skillArr.push(this.state.choice_three) 

            this.props.dispatch({type:'NEW_CHARACTER_SKILLS',payload: skillArr})
            this.props.history.push('./Review')
    }
    render() {
        return <div className='Skills'>
            <div className="skillnames">
                <h1>{this.props.char.class.class_name} Skill Choices</h1>
                {this.props.char.class.skills.map((item) => (<h4 key={item} onClick={() => this.learnMore(item)}>{item}</h4>))}
            </div>
            <div className="skillDef">
                {this.props.skill && <p><b>{this.state.skill}</b>
                    <br />{this.props.skill}</p>}
            </div>
            <div className="skillChoice">
                    <select required value={this.state.choice_one}  onChange={(event) => this.handleChange(event, 'choice_one')}>
                        <option value=''>Choose First Skill</option>
                        {this.props.char.class.skills.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                    </select>
                    {this.state.choice_one &&
                    <select required value={this.state.choice_two}  onChange={(event) => this.handleChange(event, 'choice_two')}>
                    <option value=''>Choose First Skill</option>
                    {this.props.char.class.skills.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                </select>
                }
                 {this.state.choice_two && this.props.char.class.class_name ==='Ranger' ?
                    <select required value={this.state.choice_three}  onChange={(event) => this.handleChange(event, 'choice_three')}>
                    <option value=''>Choose First Skill</option>
                    {this.props.char.class.skills.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                </select>
                :
                <></>
                }
               <button onClick={()=> this.submitChoices()}>Select and Continue!</button>
                
            </div>
        </div>
    }

}

const mapStateToProps = state => ({
    skill: state.skillDefinition,
    classes: state.classRouter,
    char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Skills);
