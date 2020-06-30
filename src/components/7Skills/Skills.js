import React, { Component } from 'react'
import { connect } from 'react-redux'
class Skills extends Component {
    componentDidMount() {
        console.log(this.props.classes)
    }
    learnMore=()=>{
        //make get request matching skill name to skill name in  table and return description
    }
    render() {
        return <div className='Skills'>
            <h1>{this.props.char.class.class_name} Skill Choices</h1>
            {this.props.char.class.skills.map((item) => (<h4 key={item} onClick={()=>this.learnMore(item)}>{item}</h4>))}
        </div>
    }

}

const mapStateToProps = state => ({
    classes: state.classRouter,
    char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Skills);
