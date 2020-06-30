import React, {Component} from 'react'
import {connect} from 'react-redux'

class Equipment extends Component{
 
    state={
        choices:{
            1:'',
            2:'',
            3:'',
            4:''
        }
    }
    handleChange = ( dataType) => {
       this.props.dispatch({type:dataType})
       console.log(this.props.list)
    }
   
    render(){
        console.log(this.props.list)
        return<div className='Equipment'>
        
            <button onClick={()=>this.handleChange('GET_SIMPLES')}>simple</button>
            <button  onClick={()=>this.handleChange('GET_MARTIALS')}>martial</button>
            <button  onClick={()=>this.handleChange('GET_ARMORS')}>armor</button>
            <button  onClick={()=>this.handleChange('GET_SHIELDS')}>shield</button>
            <button  onClick={()=>this.handleChange('GET_PACKS')}>packs</button>
        </div>
    }

}

const mapStateToProps = state => ({
    classes: state.classReducer,
   list:state.initialApiGet,
   item:state.itemInfo
  
});
export default connect(mapStateToProps)(Equipment);