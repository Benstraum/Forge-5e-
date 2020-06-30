import React, {Component} from 'react'
import {connect} from 'react-redux'

import './Class.css'
class Class extends Component{
    state = {
        choice: ''
    }
    componentDidMount(){
        this.props.dispatch({type:'GET_CLASSES'})
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            [type]: event.target.value
        })
    }
    saveClass=()=>{
        this.props.dispatch({type:'NEW_CHARACTER_CLASS', payload:this.props.classes[this.state.choice]})
        this.props.dispatch({type:'GET_SIMPLES'})
        this.props.dispatch({type:'GET_MARTIALS'})
        this.props.dispatch({type:'GET_ARMORS'})
        this.props.dispatch({type:'GET_SHIELDS'})
        this.props.dispatch({type:'GET_PACKS'})
        this.props.history.push('/Equipment')
    }
    render(){
        let classes=this.props.classes
        let x = this.state.choice
        return<div className='Class'>
             <h1>Classes</h1>
                <p>learn about your choices, then continue the character building process
                     hitting the continue buttonat the bottom of the screen</p>
                <select value={this.state.choice.name} placeholder='race choice' onChange={(event) => this.handleChange(event, 'choice')}>
                    <option value=''>Choose</option>
                    {this.props.classes.map((item, i) => (<option key={item.id} value={i}>{item.class_name}</option>))}
                </select>
                <h2>Reference image:</h2>
                {this.state.choice?
                    <img alt={classes.class_name} src={classes[x].image_male || classes[x].image_female} />
                    :
                    <img alt="default person" src="https://4.bp.blogspot.com/-aJ-qyvGsvNc/WfS7NfszD8I/AAAAAAABGwc/8s_6iFOemH4Gu80Hv89wUbJp8GbRDSBcQCLcBGAs/s1600/Alec%2BIvanovich.jpg"/>
                }
                {this.state.choice && <>
                    <h2>Lore:</h2>
                    <p>{classes[x].lore}</p>
                </>}
                {this.state.choice && <>
                    <h2>In Game Stats:</h2>
                    <p><b>Dice Used For Health/Hit Dice</b>
                        <br />
                        {classes[x].hit_dice}</p>
                    <p><b>Usable Armor</b>
                        <br />
                        {classes[x].armor_types}</p>
                    <p><b>Usable Weapons
                        <br />
                    </b>{classes[x].weapon_types}</p>
                    <p><b>Class Tools</b>
                    <br />
                    {classes[x].tools}</p>
                    <p><b>Saving Throws</b>
                    <br />
                    {classes[x].saving_throw_1}, {classes[x].saving_throw_2}</p>
                    <p><b>Class Skills</b>
                    <br />
                    {classes[x].skills.join(', ')}</p>
                    <p><b>Class Features</b>
                    <br />
                    {classes[x].feature}</p>
                    <button onClick={()=>this.saveClass()}>Select & Continue</button>
                </>}
        </div>
    }

}

const mapStateToProps = state => ({
    classes: state.classRouter
});
export default connect(mapStateToProps)(Class);