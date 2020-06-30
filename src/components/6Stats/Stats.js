import React, { Component } from 'react'
import { connect } from 'react-redux'
class Stats extends Component {
    componentDidMount() {
        console.log(this.props.char)
    }
    render() {
        return (
            <div className='Stats'>
                <h1>Ability Scores</h1>
                <p>Based on your class choice: {this.props.char.class.class_name},
                    and your race: {this.props.char.race} good stats to put higher scores in are:
                    {this.props.char.class.saving_throw_1}, and {this.props.char.class.saving_throw_2}
                </p>

            </div>
        )
    }

}

const mapStateToProps = state => ({
    char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Stats);