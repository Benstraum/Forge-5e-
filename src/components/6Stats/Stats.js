import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Step } from 'semantic-ui-react'
import './Stats.css'
class Stats extends Component {
    state = {
        str: '',
        dex: '',
        con: '',
        int: '',
        wis: '',
        cha: ''
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    findMod=(stat)=>{
        let mod = Math.floor((stat - 10)/2)
         return mod
     }
    submitChoices = () => {
        let health = this.findMod(this.state.con) + this.props.char.class.hit_dice
        this.props.dispatch({type:'NEW_CHARACTER_STATS',payload: this.state})
        this.props.dispatch({type:'NEW_CHARACTER_HEALTH', payload:health })
        this.props.history.push('./Skills')
    }
    render() {
        return (
            <div className='Stats'>
     <Step.Group size='tiny' widths={8} unstackable>
    <Step >
      <Step.Content>
        <Step.Title>Race</Step.Title>
        <Step.Description>Choose your player race</Step.Description>
      </Step.Content>
    </Step>
    <Step >
      <Step.Content>
        <Step.Title>Class</Step.Title>
        <Step.Description>Choose your class</Step.Description>
      </Step.Content>
    </Step>
    <Step >
      <Step.Content>
        <Step.Title>Items</Step.Title>
        <Step.Description>choose starting gear</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Step.Content>
        <Step.Title>Stats</Step.Title>
        <Step.Description>Allocate Stats</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Step.Content>
        <Step.Title>Skills</Step.Title>
        <Step.Description>Choose Skills</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Step.Content>
        <Step.Title>Name</Step.Title>
        <Step.Description>Review And Name</Step.Description>
      </Step.Content>
    </Step>
  </Step.Group>
                <h1>Ability Scores</h1>
                <p>
                    Based on your class choice: {this.props.char.class.class_name},
                    and your race: {this.props.char.race.name}-- good stats to put higher scores in are:
                    {this.props.char.class.saving_throw_1}, and {this.props.char.class.saving_throw_2}
                    </p>
                <p>
                    Because you are a {this.props.char.race.name}, add these bonuses on top of what you 
                    assign to your scores: {this.props.char.race.stat_bonuses}
                </p>
                <div className="scores">
                <h3>Strength :</h3>
                <input placeholder="strength score"
                    onChange={(event) => this.handleChange(event, 'str')}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20" />
                    <br/>
                <h3>Dexterity :</h3>
                <input placeholder="dexterity score"
                    onChange={(event) => this.handleChange(event, 'dex')}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20" />
                    <br/>
                <h3>Constitution :</h3>
                <input placeholder="constitution score"
                    onChange={(event) => this.handleChange(event, 'con')}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20" />
                    <br/>
                <h3>Intelligence :</h3>
                <input placeholder="intelligence score"
                    onChange={(event) => this.handleChange(event, 'int')}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20" />
                    <br/>
                <h3>Wisdom :</h3>
                <input placeholder="wisdom score"
                    onChange={(event) => this.handleChange(event, 'wis')}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20" />
                    <br/>
                <h3>Charisma Score:</h3>
                <input placeholder="charisma score"
                    onChange={(event) => this.handleChange(event, 'cha')}
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="20" />
                    </div>
                    {this.state.str &&
                    this.state.dex &&
                    this.state.con &&
                    this.state.int &&
                    this.state.wis &&
                    this.state.cha ?
                    <button onClick={() => this.submitChoices()}>Submit and Continue!</button>
                    :
                    <button disabled>Enter stats to Continue</button>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Stats);
