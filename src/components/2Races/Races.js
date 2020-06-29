import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import './Races.css'
class Races extends Component {
    state = {
        choice: ''
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_RACES' })
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            [type]: event.target.value
        })
    }
    render() {
        let x = this.state.choice
        let race = this.props.races
        return <div className='Races'>
            <Container >
                <h1>Classes</h1>
                <select value={this.state.choice.name} placeholder='race choice' onChange={(event) => this.handleChange(event, 'choice')}>
                    <option value=''>Race</option>
                    {this.props.races.map((item, i) => (<option key={item.id} value={i}>{item.name}</option>))}
                </select>
                <h2>Reference:</h2>
                {this.state.choice && <>
                    <img key={race.name} src={race[x].image_male || race[x].image_female} />
                </>}
                <h2>Lore:</h2>
                {this.state.choice && <>
                    <p>{race[x].lore}</p>
                </>}
                <h2>In Game Stats:</h2>
                {this.state.choice && <>
                    <p><b>languages</b>
                        <br />
                        {race[x].languages}</p>
                    <p><b>Stat increases:
                        <br />
                    </b>{race[x].stat_bonuses}</p>
                    <h4>Features:</h4>
                    <p>{race[x].features}</p>
                </>}

            </Container>
        </div>
    }

}

const mapStateToProps = state => ({
    races: state.racesRouter
});
export default connect(mapStateToProps)(Races);