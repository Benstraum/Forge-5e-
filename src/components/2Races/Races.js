import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Accordion, Button } from 'semantic-ui-react'
import './Races.css'
import Progress from '../Progress/Progress'





class Races extends Component {

  state = {
    choice: '',
    activeIndex: ''
  }
  handleChange = (event, type) => {
    console.log(event.target.value)
    this.setState({
      [type]: event.target.value
    })
  }
  saveRace() {
    this.props.dispatch({ type: 'NEW_CHARACTER_RACE', payload: this.props.races[this.state.choice] })
    this.props.history.push('/Class')
  }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ ...this.state, activeIndex: newIndex })
  }
  render() {
    let x = this.state.choice
    let race = this.props.races
    const { activeIndex } = this.state
    return <div className='Races'>
      <Progress />
      <br />

      <h1>Races of Faerun</h1>
      <select value={this.state.choice.name} placeholder='race choice' onChange={(event) => this.handleChange(event, 'choice')}>
        <option value=''>Learn More about:</option>
        {this.props.races.map((item, i) => (<option key={item.id} value={i}>{item.name}</option>))}
      </select>
      <p style={{ textAlign: 'center' }}>learn about your choices, then continue the character building process
                     hitting the continue buttonat the bottom of the screen</p>
      <br />
      {this.state.choice ? <>
        <img alt={race.name} src={race[x].image_male || race[x].image_female} /></>
        : <>
          <img alt="default person" src="https://4.bp.blogspot.com/-aJ-qyvGsvNc/WfS7NfszD8I/AAAAAAABGwc/8s_6iFOemH4Gu80Hv89wUbJp8GbRDSBcQCLcBGAs/s1600/Alec%2BIvanovich.jpg" />
        </>
      }
      <br />
      {this.state.choice &&
        <>
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              <b>{race[x].name} Lore</b>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>{race[x].lore}</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              <b>alignment</b>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>{race[x].alignment}</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              <b>languages</b>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>{race[x].languages}</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 3}
              index={3}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              <b>stat increases</b>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
              <p>{race[x].stat_bonuses}</p>
            </Accordion.Content>

            <Accordion.Title
              active={activeIndex === 4}
              index={4}
              onClick={this.handleClick}
            >
              <Icon name='dropdown' />
              <b>features</b>
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
              <p>{race[x].features}</p>
            </Accordion.Content>

          </Accordion>
          <Button fluid style={{ background: '#641212', color: 'white' }} onClick={() => this.saveRace()}>Select & Continue</Button>
        </>
      }

    </div>
  }
}

const mapStateToProps = state => ({
  races: state.racesRouter
});
export default connect(mapStateToProps)(Races);