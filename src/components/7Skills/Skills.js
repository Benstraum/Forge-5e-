import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Grid, Divider, Icon } from 'semantic-ui-react'
import './Skills.css'

import Progress from '../Progress/Progress'
class Skills extends Component {
  state = {
    skill: '',
    choice_one: '',
    choice_two: '',
    choice_three: ''
  }
  componentDidMount(){
    localStorage.setItem('char', this.props.char)
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
    let skills
    this.state.choice_three ?
      skills = this.state.choice_one + ', ' + this.state.choice_two + ', ' + this.state.choice_three
      :
      skills = this.state.choice_one + ', ' + this.state.choice_two

    this.props.dispatch({ type: 'NEW_CHARACTER_SKILLS', payload: skills })
    this.props.history.push('./Review')
  }
  render() {
    return (<>
      <Progress />
      <div className='Skills'>
        {/* This section takes skills and filters out the previous choice from what one can choose in their skills
        also maps out skills and descriptions to display neatly on dom */}
        <h1>{this.props.char.class.class_name} Skill Choices</h1>
        <p style={{textAlign:'center'}}><i>Click on the <Icon name='question circle' /> icons for more info</i></p>
        <Grid columns={this.props.char.class.class_name === 'Ranger' ? 3 : 2} divided>
          <Grid.Row>
            <Grid.Column>
              <select required value={this.state.choice_one} onChange={(event) => this.handleChange(event, 'choice_one')}>
                <option value=''>Choose First Skill</option>
                {this.props.char.class.skills.map((item, i) => (<option key={i} value={item}>{item}</option>))}
              </select>
            </Grid.Column>
            <Grid.Column>
              {this.state.choice_one ?
                <select required value={this.state.choice_two} onChange={(event) => this.handleChange(event, 'choice_two')}>
                  <option value=''>Choose second Skill</option>
                  {this.props.char.class.skills.filter(item=> item!==this.state.choice_one).map((item, i) => (<option key={i} value={item}>{item}</option>))}
                </select>
                :
                <select disabled value={this.state.choice_two} onChange={(event) => this.handleChange(event, 'choice_two')}>item!==this.state.choice_two
                  <option value=''>Choose second</option>
                  {this.props.char.class.skills.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                </select>
              }
            </Grid.Column>
            {this.props.char.class.class_name === 'Ranger' &&
              <Grid.Column>
                {this.state.choice_two ?
                  <select required value={this.state.choice_three} onChange={(event) => this.handleChange(event, 'choice_three')}>
                    <option value=''>Choose Third </option>
                    {this.props.char.class.skills.filter(item=> item!==this.state.choice_one).filter(item=> item!==this.state.choice_two).map((item, i) => (<option key={i} value={item}>{item}</option>))}
                  </select>
                  :
                  <select disabled value={this.state.choice_three} onChange={(event) => this.handleChange(event, 'choice_three')}>
                    <option value=''>Choose Third Skill</option>
                    {this.props.char.class.skills.map((item, i) => (<option key={i} value={item}>{item}</option>))}
                  </select>}
              </Grid.Column>
            }
          </Grid.Row>
        </Grid>
        <Divider />
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <p><u><b>Skill Names:</b></u></p>
            </Grid.Column>
            <Grid.Column>
              <p><u><b>Skill Definitions:</b></u></p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="skillnames">
                {this.props.char.class.skills.map((item) => (<p key={item} style={{ textAlign: 'left' }} onClick={() => this.learnMore(item)}><Icon name='question circle' /><b>{item}</b></p>))}
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="skillDef">
                {this.props.skill && <p><b>{this.state.skill}</b>
                  <br />{this.props.skill}</p>}
              </div>
            </Grid.Column>
          </Grid.Row>
          <Button fluid style={{ background: '#641212', color: 'white' }} onClick={() => this.submitChoices()}>Select and Continue!</Button>
        </Grid>
      </div>
    </>
    )
  }
}
const mapStateToProps = state => ({
  skill: state.skillDefinition,
  classes: state.classRouter,
  char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Skills);
