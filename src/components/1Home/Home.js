import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//styling
import './Home.css'
import { Container } from 'semantic-ui-react'
import HomeMapItem from '../HomeMapItem/HomeMapItem';

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    sendToSheet=(char)=>{
        this.props.dispatch({type:'SET_CHAR_SHEET', payload: char})
        this.props.history.push('./CharacterSheet')
    }
    render() {
        return <div className='Home'>
            <Container>
                {this.props.characters.map(char => (<HomeMapItem key={char.id} char={char} sendToSheet={this.sendToSheet} />))}
            </Container>
           <button className='createCharBtn' onClick={this.changePage}><Link to="/Races">Create Character!</Link></button>
        </div>
    }

}
const mapStateToProps = state => ({
    characters: state.characterReducer
});
export default connect(mapStateToProps)(Home);