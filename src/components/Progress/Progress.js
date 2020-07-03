import React, {Component} from 'react'

class Progress extends Component{
    render(){
        return(
          <Step.Group size='tiny' widths={8} unstackable>
          <Step >
            <Step.Content>
              <Step.Title>Race</Step.Title> 
            </Step.Content>
          </Step>
          <Step >
            <Step.Content>
              <Step.Title>Class</Step.Title>
            </Step.Content>
          </Step>
          <Step >
            <Step.Content>
              <Step.Title>Items</Step.Title>
            </Step.Content>
          </Step>
          <Step >
            <Step.Content>
              <Step.Title>Stats</Step.Title>
            </Step.Content>
          </Step>
          <Step >
            <Step.Content>
              <Step.Title>Skills</Step.Title>
            </Step.Content>
          </Step>
          <Step active>
            <Step.Content>
              <Step.Title>Name</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        )
    }

}

export default Progress;