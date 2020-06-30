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
    componentDidMount(){
        console.log(this.props.state)
    }
    render(){
        return<div className='Equipment'></div>
    }

}

const mapStateToProps = state => ({
    state,
  
});
export default connect(mapStateToProps)(Equipment);