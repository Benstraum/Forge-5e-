import React, {Component} from 'react'
import {connect} from 'react-redux'
class ReviewAndName extends Component{
    state={
        name:'',
    }
    componentDidMount(){
        console.log(this.props.char)
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    finishCharacter=()=>{
        this.props.dispatch({type:'NEW_CHARACTER_NAME', payload:this.state.name})
        this.props.dispatch({type:'POST_CHAR', payload: this.props.char})
        this.props.history.push('/home')
    }
    render(){
        return<div className='Review'>
            <h2>Who are you?</h2>
            <input placeholder='Name Your Character' onChange={(event)=>this.handleChange(event, 'name')} />
            <h4> the {this.props.char.race.name} {this.props.char.class.class_name}</h4>
            <button onClick={()=>this.finishCharacter()}>Finish Character Creation!</button>

        </div>
    }

}

const mapStateToProps = state => ({
    char: state.newCharacterReducer
});
export default connect(mapStateToProps)(ReviewAndName);