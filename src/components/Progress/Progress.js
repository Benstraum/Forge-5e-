import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Step} from 'semantic-ui-react'
class Progress extends Component{
  state={
    one:false,
    two:false,
    three:false,
    four:false,
    five:false,
    six:false,
    seven:false,
    eight:false
  }
    render(){
     //conditionally render each step making active or innactive based on newcharacter reducer.
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
const mapStateToProps = state => ({
  char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Progress);