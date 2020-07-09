import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConditionalItemInfo from '../ConditionalItemInfo/ConditionalItemInfo'
import { Button } from 'semantic-ui-react'
import './Equipment.css'

import Progress from '../Progress/Progress'
class Equipment extends Component {
  state = {
    one: '',
    two: '',
    three: '',
    four: '',
    choice:''
  }

  handleChange = (event, type) => {
    console.log(event.target.text)
    this.setState({
      ...this.state,
      [type]: event.target.value
    })
  }
  submitChoices = () => {
    this.props.dispatch({ type: 'NEW_CHARACTER_EQUIPMENT', payload: this.state.one + ' -- ' + this.state.two + ' -- ' + this.state.three + ' -- ' + this.state.four })
    this.props.history.push('./Stats')
  }
  render() {
    let choice =  this.props.choices ||this.state.choice
    return (<>
      <Progress />
      <div className='Equipment'>
        <h1>Choose starting Equipment</h1>
        <ConditionalItemInfo />
        <br />
        <div className="choices">
          {/* pretty starightforward. choices created linearly from inside the db then button is usable when choices are made. */}
          <p><b>First Choice:</b></p>
          <select name="one" value={this.state.one} onChange={(event) => this.handleChange(event, 'one')}>
            <option value=''>Choose One</option>
            <option value={choice.choice_1a}>{choice.choice_1a}</option>
            <option value={choice.choice_1b}>{choice.choice_1b}</option>
          </select>
          <br />
          <p><b>Second Choice:</b></p>
          <select name="two" value={this.state.two} onChange={(event) => this.handleChange(event, 'two')}>
            <option value=''>Choose One</option>
            <option value={choice.choice_2a}>{choice.choice_2a}</option>
            <option value={choice.choice_2b}>{choice.choice_2b}</option>
          </select>
          <br />
          <p><b>Third Choice:</b></p>
          <select name="three" value={this.state.three} onChange={(event) => this.handleChange(event, 'three')}>
            <option value=''>Choose One</option>
            <option value={choice.choice_3a}>{choice.choice_3a}</option>
            <option value={choice.choice_3b}>{choice.choice_3b}</option>
          </select>
          <br />
          <p><b>Fourth Choice:</b></p>
          <select value={this.state.four} onChange={(event) => this.handleChange(event, 'four')}>
            {choice.choice_4a === choice.choice_4b ?
              <>
                <option >This class has an automatic choice</option>
                <option value={choice.choice_4a}>{choice.choice_4a}</option>
              </>
              :
              <>
                <option value=''>Choose One</option>
                <option value={choice.choice_4a}>{choice.choice_4a}</option>
                <option value={choice.choice_4b}>{choice.choice_4b}</option>
              </>
            }
          </select>
          <br />
          {this.state.one &&
            this.state.two &&
            this.state.three &&
            this.state.four ? <> <br />
              <Button fluid style={{ background: '#641212', color: 'white' }} onClick={() => this.submitChoices()}>Submit and Continue!</Button>
            </>
            : <> <br />
              <Button fluid style={{ background: '#641212', color: 'white' }} disabled>Choose items to Continue</Button>
            </>
          }
        </div>
      </div>
    </>
    )
  }
}

const mapStateToProps = state => ({
  char: state.newCharacterReducer,
  classes: state.classReducer,
  choices: state.equipmentChoiceRouter
});
export default connect(mapStateToProps)(Equipment);