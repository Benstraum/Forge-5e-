import React, { Component } from 'react'
import { connect } from 'react-redux';
//styling
import { Container, Divider } from 'semantic-ui-react'

class HomeMapItem extends Component {
    state={
        newName:'',
        edit:false
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    deleteChar=(id)=>{
        this.props.dispatch({type:'DELETE_CHARACTER', payload:id})
    }
    changeName=(data)=>{
        console.log(data)
        this.props.dispatch({type:'CHANGE_NAME', payload:{id:data, name:this.state.newName}})
        this.toggleEdit()
    }
    toggleEdit=()=>{
        this.setState({
            edit:!this.state.edit
        })
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    
    render() {
        return <div className='individualChar'>
                    <Container>
                        {this.state.edit ? <>
                        <input value={this.state.newName} placeholder="New Name" onChange={(event)=>this.handleChange(event, 'newName')} />
                        <button onClick={()=>this.changeName(this.props.char.id)}>Save</button>
                        </>
                        :<h3>{this.props.char.name}</h3>}
                        <p>lv:1 {this.props.char.race} {this.props.char.class}</p>
                        <button onClick={()=>this.props.sendToSheet(this.props.char)}>See Character Sheet!</button>
                        <button onClick={()=>this.toggleEdit()}>edit name</button>
                        <button onClick={() =>this.deleteChar(this.props.char.id)}>delete</button>
                        <Divider fitted />
                    </Container>
        </div>
    }

}

export default connect()(HomeMapItem);