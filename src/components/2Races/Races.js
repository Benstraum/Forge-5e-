import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Races.css'
class Races extends Component {
    state = {
        choice: ''
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            [type]: event.target.value
        })
    }
    saveRace(){
        this.props.dispatch({type:'NEW_CHARACTER_RACE', payload:this.props.races[this.state.choice]})
        this.props.history.push('/Class')
    }
    render() {
        let x = this.state.choice
        let race = this.props.races
        return <div className='Races'>
            <br/>

                <h1>Races from Faerun</h1>
                <p>learn about your choices, then continue the character building process
                     hitting the continue buttonat the bottom of the screen</p>
                <select value={this.state.choice.name} placeholder='race choice' onChange={(event) => this.handleChange(event, 'choice')}>
                    <option value=''>Choose</option>
                    {this.props.races.map((item, i) => (<option key={item.id} value={i}>{item.name}</option>))}
                </select>
                <br/>
                {this.state.choice?
                    <img alt={race.name} src={race[x].image_male || race[x].image_female} />
                    :
                    <img alt="default person" src="https://4.bp.blogspot.com/-aJ-qyvGsvNc/WfS7NfszD8I/AAAAAAABGwc/8s_6iFOemH4Gu80Hv89wUbJp8GbRDSBcQCLcBGAs/s1600/Alec%2BIvanovich.jpg"/>
                }
                {this.state.choice && <>
                    <h2>Lore:</h2>
                    <p>{race[x].lore}</p>
                </>}
                {this.state.choice && <>
                    <h2>In Game Stats:</h2>
                    <p><b>alignment</b>
                        <br />
                        {race[x].alignment}</p>
                    <p><b>languages</b>
                        <br />
                        {race[x].languages}</p>
                    <p><b>Stat increases:
                        <br />
                    </b>{race[x].stat_bonuses}</p>
                    <h4>Features:</h4>
                    <p>{race[x].features}</p>
                    <button onClick={()=>this.saveRace()}>Select & Continue</button>
                </>}

        </div>
    }

}

const mapStateToProps = state => ({
    races: state.racesRouter
});
export default connect(mapStateToProps)(Races);