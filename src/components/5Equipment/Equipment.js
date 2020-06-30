import React, { Component } from 'react'
import { connect } from 'react-redux'

class Equipment extends Component {
    state = {
            one: '',
            two: '',
            three: '',
            four: '',
        itemToLearn: '',
        category: '',
        learnMore: false,
        desc: {}
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    toggleLearn = () => {
        this.state.learnMore ?
            this.setState({
                ...this.state,
                itemToLearn: '',
                category: 'none',
                url: '',
                learnMore: !this.state.learnMore
            })

            :
            this.setState({
                ...this.state,
                learnMore: !this.state.learnMore
            })

    }
    getItemDetails = () => {
        this.props.dispatch({ type: 'FETCH_ITEMS', payload: this.state.url })
        this.setState({
            ...this.state,
            desc: this.props.item
        })
    }
    submitChoices = () => {
        this.props.dispatch({type:'NEW_CHARACTER_EQUIPMENT', payload:this.state.one +'. '+ this.state.two +'. '+ this.state.three +'. '+ this.state.four })
        this.props.history.push('./Stats')
    }
    render() {
        return <div className='Equipment'>
            <h1>Choose starting Equipment</h1>
            <div className="conditionalInfo">
                <button onClick={() => this.toggleLearn()}>{this.state.learnMore ? "Close More info" : "Want to learn about equipment?"}</button>
                {this.state.learnMore &&
                    <select value={this.state.category} placeholder="Armor" onChange={(event) => this.handleChange(event, 'category')}>
                        <option value="GET_ARMORS">Armors</option>
                        <option value="GET_MARTIALS">martial weapons</option>
                        <option value="GET_SIMPLES">simple weapons</option>
                        <option value="GET_PACKS">equipment packs</option>
                        <option value="GET_SHIELDS">shields</option>
                    </select>
                }
                {this.state.category === "GET_ARMORS" &&
                    <select value={this.state.itemToLearn.name} placeholder="Armor" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Armor choice</option>
                        {this.props.armors.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                }
                {this.state.category === 'GET_MARTIALS' &&
                    <select value={this.state.itemToLearn.name} placeholder="Martial weapons" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Martial weapon choice</option>
                        {this.props.martials.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                }

                {this.state.category === 'GET_SIMPLES' &&
                    <select value={this.state.itemToLearn.name} placeholder="Simple weapons" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Simple weapon choice</option>
                        {this.props.simples.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                }
                {this.state.category === 'GET_PACKS' &&
                    <select value={this.state.itemToLearn.name} placeholder="shields" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Equipment pack choice</option>
                        {this.props.packs.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                }
                {this.state.category === 'GET_SHIELDS' &&
                    <button onClick={() => this.setState({
                        ...this.state,
                        desc: this.props.shields
                    })}>{this.props.shields.name}</button>
                }
                {this.state.url && <button onClick={() => this.getItemDetails()}>Get the info!</button>}
            </div>
            <div className="choices">
                <h2>First Choice:</h2>
                <select value={this.state.one}  onChange={(event) => this.handleChange(event, 'one')}>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_1a}>{this.props.choices.choice_1a}</option>
                        <option value={this.props.choices.choice_1b}>{this.props.choices.choice_1b}</option>
                    </select>
                <h2>Second Choice:</h2>
                <select value={this.state.two} onChange={(event) => this.handleChange(event, 'two')}>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_2a}>{this.props.choices.choice_2a}</option>
                        <option value={this.props.choices.choice_2b}>{this.props.choices.choice_2b}</option>
                    </select>
                <h2>Third Choice:</h2>
                <select value={this.state.three} onChange={(event) => this.handleChange(event, 'three')}>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_3a}>{this.props.choices.choice_3a}</option>
                        <option value={this.props.choices.choice_3b}>{this.props.choices.choice_3b}</option>
                    </select>
                <h2>Fourth Choice:</h2>
                <select value={this.state.four} onChange={(event) => this.handleChange(event, 'four')}>
                        { this.props.choices.choice_4a === this.props.choices.choice_4b ?
                        <>
                        <option >See default choice for class</option>
                        <option value={this.props.choices.choice_4a}>{this.props.choices.choice_4a}</option>
                        </>
                        :
                        <>
                        <option value=''>Choose one</option>
                        <option value={this.props.choices.choice_4a}>{this.props.choices.choice_4a}</option>
                        <option value={this.props.choices.choice_4b}>{this.props.choices.choice_4b}</option>
                        </>
                        }
                    </select>
                {this.state.one &&
                    this.state.two &&
                    this.state.three &&
                    this.state.four ?
                    <button onClick={() => this.submitChoices()}>Submit and Continue!</button>
                    :
                    <button disabled>Submit and Continue!</button>}
            </div>

        </div>
    }

}

const mapStateToProps = state => ({
    classes: state.classReducer,
    armors: state.initialApiGet.armors,
    martials: state.initialApiGet.martial,
    simples: state.initialApiGet.simple,
    shields: state.initialApiGet.shields,
    packs: state.initialApiGet.packs,
    item: state.itemInfo,
    choices: state.equipmentChoiceRouter
});
export default connect(mapStateToProps)(Equipment);