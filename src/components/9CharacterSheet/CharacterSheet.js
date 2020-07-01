import React, {Component} from 'react'
import {connect} from 'react-redux'

class CharacterSheet extends Component{
    state={
        cSheet:  this.props.cSheet
    }
    componentDidMount(){
        this.props.dispatch({type:'RETRIEVE_SHEET'})
    }
    render(){
        console.log(this.props.cSheet)
        return<div className='CharacterSheet'>
            <div className="identity">

            </div>
            <div className="abilityScores">

            </div>
            <div className="combatStats">

            </div>
            <div className="skills">

            </div>
            <div className="equipment">
                
            </div>
        </div>
    }

}
const mapStateToProps = state => ({
    cSheet: state.characterSheetReducer
});
export default connect(mapStateToProps)(CharacterSheet);