import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//styling
import './Home.css'
import { Container, Divider } from 'semantic-ui-react'

class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    render() {
        console.log(this.props.characters)
        return <div className='Home'>
            <Container>
                {this.props.characters.map(char => (
                    <Container key={char.name}>
                        <h3>{char.name}</h3>
                        <p>lv:1 {char.race} {char.class}</p>

                        <button>edit name</button>
                        <button>delete</button>
                        <Divider fitted />
                    </Container>))}
            </Container>
           <button className='createCharBtn' onClick={this.changePage}><Link to="/Races">Create Character!</Link></button>
        </div>
    }

}
const mapStateToProps = state => ({
    characters: state.characterReducer
});
export default connect(mapStateToProps)(Home);