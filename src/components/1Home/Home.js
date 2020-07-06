import React, { Component } from 'react'
import { connect } from 'react-redux';
//styling
import image from '../App/background.jpg'
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react'
import HomeMapItem from '../HomeMapItem/HomeMapItem';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    sendToSheet = (char) => {
        this.props.dispatch({ type: 'SET_CHAR_SHEET', payload: char })
        this.props.history.push('./CharacterSheet')
    }
    changePage = () => {
        this.props.dispatch({ type: 'NEW_CHARACTER' })
        this.props.history.push('/Races')
    }
    render() {
        return <div className='Home' style={{overflowX:'hidden'}}>
            <div className="characters" style={{ backgroundImage: 'url(' + image + ')', backgroundColor: 'lightgrey', height: '80vh', overflowY: 'auto' }}>
                {
                    this.props.characters.length ?
                        this.props.characters.map(char => (<HomeMapItem key={char.id} char={char} sendToSheet={this.sendToSheet} />))
                        :
                        <h2 style={{ textAlign: 'center', marginTop: '30vh' }}>Your Characters will go here!</h2>
                }
            </div>
            <div className="characterCreate">
            </div>
            <Button
                fluid
                inverted
                style={{ position: 'relative', background: '#641212', color: 'white', border: '3px solid black' }}
                onClick={() => this.changePage()}>Click Here To Create Character!</Button>
        </div>
    }
}
const mapStateToProps = state => ({
    characters: state.characterReducer
});
export default connect(mapStateToProps)(Home);