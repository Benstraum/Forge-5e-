import React from 'react'
import {connect} from 'react-redux'
import { Step} from 'semantic-ui-react'
import {  useLocation } from 'react-router-dom';
import './Progress.css'
const Progress =(props)=> {  
  let location = useLocation();
  
     //conditionally render each step making active or innactive based on newcharacter reducer.
        return(
          <div className="progbar">
          <Step.Group  size='tiny' widths={8} unstackable>
          { location.pathname ==='/Races'?
          <Step >
            <Step.Content >
              <Step.Title>Race</Step.Title> 
            </Step.Content>
          </Step>
          :
          <Step disabled>
            <Step.Content>
              <Step.Title>Race</Step.Title> 
            </Step.Content>
          </Step>
          }
          {  location.pathname==='/Class'?
          <Step >
            <Step.Content>
              <Step.Title>Class</Step.Title>
            </Step.Content>
          </Step>
          :
          <Step disabled>
            <Step.Content>
              <Step.Title>Class</Step.Title>
            </Step.Content>
          </Step>
            }
            {  location.pathname==='/Equipment'?
           <Step >
            <Step.Content>
              <Step.Title>Items</Step.Title>
            </Step.Content>
          </Step>
          :
          <Step disabled>
          <Step.Content>
            <Step.Title>Items</Step.Title>
          </Step.Content>
        </Step>
            }
            {  location.pathname==='/Stats'?
           <Step >
            <Step.Content>
              <Step.Title>Stats</Step.Title>
            </Step.Content>
          </Step>
          :
          <Step disabled>
          <Step.Content>
            <Step.Title>Stats</Step.Title>
          </Step.Content>
        </Step>
            }
              {  location.pathname==='/Skills' ?
           <Step >
            <Step.Content>
              <Step.Title>Skills</Step.Title>
            </Step.Content>
          </Step>
          :
          <Step disabled>
          <Step.Content>
            <Step.Title>Skills</Step.Title>
          </Step.Content>
        </Step>
            }
           { location.pathname==='/review'?
           <Step >
            <Step.Content>
              <Step.Title>Finish</Step.Title>
            </Step.Content>
          </Step>
          :
          <Step disabled>
          <Step.Content>
            <Step.Title>Finish</Step.Title>
          </Step.Content>
        </Step>
            }
        </Step.Group>
        </div>
        )
}
const mapStateToProps = state => ({
  char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Progress);