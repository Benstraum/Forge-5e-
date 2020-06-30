import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    submitChoices = () => {
        this.props.dispatch({type:'NEW_CHARACTER_STATS',payload: this.state})
        this.props.history.push('./Skills')
    }
    render() {
        return (
            <div className='Stats'>
                <h1>Ability Scores</h1>
                <p>
                    Based on your class choice: {this.props.char.class.class_name},
                    and your race: {this.props.char.race.name}-- good stats to put higher scores in are:
                    {this.props.char.class.saving_throw_1}, and {this.props.char.class.saving_throw_2}
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
