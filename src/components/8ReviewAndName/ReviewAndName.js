import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  TextArea, Input, Button, Form } from 'semantic-ui-react'
import './ReviewAndName.css'
import Progress from '../Progress/Progress'
class ReviewAndName extends Component {
  state = {
    name: '',
    bio:'',
    portrait:''
  }
  componentDidMount() {
    localStorage.setItem('char', this.props.char)
  }
  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      ...this.state,
      [type]: event.target.value
    })
  }
  finishCharacter = () => {
    //finall dispatch to the reducer before posting the character to the database!
    this.props.dispatch({ type: 'NEW_CHARACTER_NAME', payload: this.state.name })
    this.props.dispatch({type:'NEW_CHARACTER_BIO', payload:this.state.bio})
    this.props.dispatch({type:'NEW_CHARACTER_PIC', payload:this.state.portrait})
    this.props.dispatch({ type: 'POST_CHAR', payload: this.props.char })
    this.props.history.push('/home')
  }
  render() {
    return <> 
    <Progress />
    <div className='Review'>
      <h2 style={{textAlign:'center'}}>Who are you?</h2>
      <Input fluid 
      label='Name' 
      labelPosition='left' 
      placeholder='What is your characters name?' 
      onChange={(event) => this.handleChange(event, 'name')} />
      <h4 style={{textAlign:'center'}}> the {this.props.char.race.name} {this.props.char.class.class_name}</h4>
      <br />
      <Input 
      fluid 
      label='Url' 
      labelPosition='left' 
      placeholder='character image URL' 
      onChange={(event) => this.handleChange(event, 'portrait')} />
      <br/>
      <Form>
        <TextArea rows={3} placeholder='What is your story?' onChange={(event) => this.handleChange(event, 'bio')} />
      </Form>
      <Button
        fluid
        attached='bottom'
        style={{ position: 'relative', marginTop:'70px', background: '#641212', color: 'white' }}
        onClick={() => this.finishCharacter()}>Finish Character Creation!</Button>

    </div>
    </>
  }
}
const mapStateToProps = state => ({
  char: state.newCharacterReducer
});
export default connect(mapStateToProps)(ReviewAndName);