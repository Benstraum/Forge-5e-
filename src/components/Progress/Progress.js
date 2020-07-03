import React, {Component} from 'react'

class Progress extends Component{
    render(){
        return(
            <Step.Group size='tiny' widths={8} unstackable>
        <Step >
          <Step.Content>
            <Step.Title>Race</Step.Title>
            <Step.Description>Choose your player race</Step.Description>
          </Step.Content>
        </Step>
        <Step >
          <Step.Content>
            <Step.Title>Class</Step.Title>
            <Step.Description>Choose your class</Step.Description>
          </Step.Content>
        </Step>
        <Step >
          <Step.Content>
            <Step.Title>Items</Step.Title>
            <Step.Description>choose starting gear</Step.Description>
          </Step.Content>
        </Step>
        <Step >
          <Step.Content>
            <Step.Title>Stats</Step.Title>
            <Step.Description>Allocate Stats</Step.Description>
          </Step.Content>
        </Step>
        <Step >
          <Step.Content>
            <Step.Title>Skills</Step.Title>
            <Step.Description>Choose Skills</Step.Description>
          </Step.Content>
        </Step>
        <Step >
          <Step.Content>
            <Step.Title>Name</Step.Title>
            <Step.Description>Name Your Character</Step.Description>
          </Step.Content>
        </Step>
      </Step.Group>
        )
    }

}

export default Progress;