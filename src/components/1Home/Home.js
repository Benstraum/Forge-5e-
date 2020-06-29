import React, {Component} from 'react'
import { connect } from 'react-redux';
//styling
import { Container } from 'semantic-ui-react'

class Home extends Component{
    componentDidMount(){
        this.props.dispatch({type: 'GET_CHARACTERS'})
    }
    render(){
        console.log(this.props.characters)
    return<div className='Home'>
        {this.props.characters.map(char =>(
        <Container key={char.id}>
            <h3>{char.name}</h3>
            <p>{char.race_name} {char.class}</p>
            <button>edit name</button>
            <button>delete</button>
        </Container>))}
        </div>
    }

}
const mapStateToProps = state => ({
    state,
    characters: state.characterReducer
  });
export default connect(mapStateToProps)(Home);