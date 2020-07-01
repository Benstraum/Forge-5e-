import React, { Component } from 'react'
import { connect } from 'react-redux'
import './ConditionalItemInfo.css'

class ConditionalItemInfo extends Component {
    state = {
        itemToLearn: '',
        category: '',
        learnMore: false,
        desc: {},
        showInfo:false,
        ac:''
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
                learnMore: !this.state.learnMore,
                showInfo:!this.state.showInfo
            })

            :
            this.setState({
                ...this.state,
                learnMore: !this.state.learnMore,
            })

    }
    getItemDetails = () => {
        this.props.dispatch({ type: 'FETCH_ITEMS', payload: this.state.url })
        this.setState({
            ...this.state,
            desc: this.props.item,
        })
    }


    render() {
        let item = this.props.item
        let desc = this.state.desc
        console.log(this.props.item)
        return <div className='Equipment'>
            <div className="conditionalInfo">
                <button onClick={() => this.toggleLearn()}>{this.state.learnMore ? "Close More info" : "Want to learn about equipment?"}</button>
                {this.state.learnMore &&
                    <select value={this.state.category} placeholder="Armor" onChange={(event) => this.handleChange(event, 'category')}>
                        <option value="">select category</option>
                        <option value="GET_ARMORS">Armors</option>
                        <option value="GET_MARTIALS">martial weapons</option>
                        <option value="GET_SIMPLES">simple weapons</option>
                        <option value="GET_PACKS">equipment packs</option>
                        <option value="GET_SHIELDS">shields</option>
                    </select>

                }
                {this.state.category === "GET_ARMORS" && <>
                    <select value={this.state.itemToLearn.name} placeholder="Armor" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Armor choice</option>
                        {this.props.armors.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                </>
                }
                {this.state.category === 'GET_MARTIALS' &&<>
                    <select value={this.state.itemToLearn.name} placeholder="Martial weapons" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Martial weapon choice</option>
                        {this.props.martials.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                     
                    <ul>
                        <li>
                            <b>name</b>: {item.name || ''}
                        </li>
                        <li>
                        <b>wepon damage</b>: {JSON.stringify(item.damage) || ''}
                        </li>
                        <li>
                        <b>weapon range</b>: {JSON.stringify(item.range) || ''}
                        </li>
                        <li>
                        <b>Cost</b>: {JSON.stringify(item.cost) || ''}
                        </li>
                    </ul>
                </>
                }

                {this.state.category === 'GET_SIMPLES' &&<>
                    <select value={this.state.itemToLearn.name} placeholder="Simple weapons" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Simple weapon choice</option>
                        {this.props.simples.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
             </>
                }
                {this.state.category === 'GET_PACKS' &&
                    <select value={this.state.itemToLearn.name} placeholder="shields" onChange={(event) => this.handleChange(event, 'url')}>
                        <option value=''>Equipment pack choice</option>
                        {this.props.packs.map((item, i) => (<option key={i} value={item.url}>{item.name}</option>))}
                    </select>
                }
                {this.state.category === 'GET_SHIELDS' &&<>
                    <button onClick={() => this.setState({
                        ...this.state,
                        desc: this.props.shields
                    })}>{this.props.shields.name}</button>
                </>
                }
                {
                this.state.url && <button onClick={()=>this.getItemDetails()}>Get the info!</button>
                }
                 { this.state.showInfo &&
                    <ul>
                        <li>
                            <b>name</b>: {item.name || ''}
                        </li>
                        <li>
                        <b>Armor class</b>: {this.parseObjectForMeDaddy(item.armor_class) || ''}
                        </li>
                        <li>
                        <b>Cost</b>: {JSON.stringify(item.cost) || ''}
                        </li>
                    </ul>
                    }
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
});
export default connect(mapStateToProps)(ConditionalItemInfo);