import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Accordion, Button } from 'semantic-ui-react'
import Progress from '../Progress/Progress'

import './Class.css'
class Class extends Component {
  state = {
    choice: '',
    activeIndex: ''
  }
  componentDidMount() {
    this.props.dispatch({ type: 'GET_CLASSES' })
  }
  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      [type]: event.target.value
    })
  }
  saveClass = () => {
    //this looks like a lot but it's just access packaging responses to send to reducer
    let saves = this.props.classes[this.state.choice].saving_throw_1 + ' | ' + this.props.classes[this.state.choice].saving_throw_2
    //these set up the reducer for nect page before sending us off
    this.props.dispatch({ type: 'NEW_CHARACTER_CLASS', payload: this.props.classes[this.state.choice] })
    this.props.dispatch({ type: 'GET_EQUIP_CHOICES', payload: this.props.classes[this.state.choice].id })
    this.props.dispatch({ type: 'NEW_CHARACTER_SAVES', payload: saves })
    this.props.history.push('/Equipment')
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ ...this.state, activeIndex: newIndex })
  }
  render() {
    let classes = this.props.classes
    let x = this.state.choice
    const { activeIndex } = this.state
    return <>
      <Progress />
      <div className='Class'>
        <h1>Classes</h1>
        <select value={this.state.choice.name}
          placeholder='class choice'
          onChange={(event) => this.handleChange(event, 'choice')}>
          <option value=''>Choose</option>
          {this.props.classes.map((item, i) => (
            <option key={item.id} value={i}>{item.class_name}</option>
          ))}
        </select>
        <p style={{ textAlign: 'center' }}
        >learn about your choices, then continue the character building process
        hitting the continue buttonat the bottom of the screen</p>
        {this.state.choice ?
          <img alt={classes.class_name} 
          style={{ padding: '1px', border: '2px solid #021a40', backgroundColor: 'darkgray', borderRadius: '4px' }} 
          src={classes[x].image_male || classes[x].image_female} />
          :
          <img alt="default person" 
          style={{ padding: '1px', border: '2px solid #021a40', backgroundColor: 'darkgray', borderRadius: '4px' }} 
          src="https://4.bp.blogspot.com/-aJ-qyvGsvNc/WfS7NfszD8I/AAAAAAABGwc/8s_6iFOemH4Gu80Hv89wUbJp8GbRDSBcQCLcBGAs/s1600/Alec%2BIvanovich.jpg" />
        }
        {this.state.choice &&
          <>
            <Accordion>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>{classes[x].class_name} Lore</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <p>{classes[x].lore}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>Hit Dice</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <p>{classes[x].hit_dice}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>Usable Armor</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <p>{classes[x].armor_types}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>Usable Weapons</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <p>{classes[x].weapon_types}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>{classes[x].class_name} Tools</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 4}>
                <p>{classes[x].tools}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 5}
                index={5}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>Saving Throws</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 5}>
                <p>{classes[x].saving_throw_1}, {classes[x].saving_throw_2}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 6}
                index={6}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>{classes[x].class_name} Skills</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 6}>
                <p>{classes[x].skills.join(', ')}</p>
              </Accordion.Content>

              <Accordion.Title
                active={activeIndex === 7}
                index={7}
                onClick={this.handleClick}
              >
                <Icon name='dropdown' />
                <b>{classes[x].class_name} Features</b>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 7}>
                <p>{classes[x].feature}</p>
              </Accordion.Content>
            </Accordion>
            <Button fluid style={{ background: '#641212', color: 'white' }} onClick={() => this.saveClass()}>Select & Continue</Button>
          </>
        }
      </div>
    </>
  }
}
const mapStateToProps = state => ({
  char: state.newCharacterReducer,
  choices: state.equipmentChoiceRouter,
  classes: state.classRouter
});
export default connect(mapStateToProps)(Class);