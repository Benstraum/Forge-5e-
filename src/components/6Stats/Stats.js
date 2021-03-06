import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Grid, Divider } from 'semantic-ui-react'
import './Stats.css'

import Progress from '../Progress/Progress'
class Stats extends Component {
    state = {
        str: '',
        dex: '',
        con: '',
        int: '',
        wis: '',
        cha: ''
    }

    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    findMod = (stat) => {
        let mod = Math.floor((stat - 10) / 2)
        return mod
    }
    submitChoices = () => {
        let health = this.findMod(this.state.con) + this.props.char.class.hit_dice
        this.props.dispatch({ type: 'NEW_CHARACTER_STATS', payload: this.state })
        this.props.dispatch({ type: 'NEW_CHARACTER_HEALTH', payload: health })
        this.props.history.push('./Skills')
    }
    render() {
        return (<>
            <Progress />
            <div className='Stats'>
                {/* this section is fairly simple. uses info from db to populate recommendations 
                and will wiat for all to be filled until user can proceed */}
                <h1>Ability Scores</h1>
                <p>
                   Common practice to finding your stats is to roll four six-sided dice, ignore the lowest number, and add together
                   to use for one ability!
                </p>
                <p>
                    **{this.props.char.race.name} add these bonuses to their respective totals:**<br/>
                     {this.props.char.race.stat_bonuses}
                </p>
                <div className="scores">
                    <Grid columns={3} divided>
                        <Grid.Row>
                            <Grid.Column>
                                <p>Strength :</p>
                                <Input placeholder="0"
                                    onChange={(event) => this.handleChange(event, 'str')}
                                    type="number"
                                    label="Str:"
                                    labelPosition='left corner'
                                    color='red'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column >
                                <p>Dexterity :</p>
                                <Input placeholder="0"
                                    onChange={(event) => this.handleChange(event, 'dex')}
                                    type="number"
                                    label="Dex:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column >
                                <p>Constitution :</p>
                                <Input placeholder="0"
                                    onChange={(event) => this.handleChange(event, 'con')}
                                    type="number"
                                    label="Con:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column >
                                <p>Intelligence :</p>
                                <Input placeholder="0"
                                    onChange={(event) => this.handleChange(event, 'int')}
                                    type="number"
                                    label="Int:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column >
                                <p>Wisdom :</p>
                                <Input placeholder="0"
                                    onChange={(event) => this.handleChange(event, 'wis')}
                                    type="number"
                                    label="Wis:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column >
                                <p>Charisma :</p>
                                <Input placeholder="0"
                                    onChange={(event) => this.handleChange(event, 'cha')}
                                    type="number"
                                    label="Cha:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                {this.state.str &&
                    this.state.dex &&
                    this.state.con &&
                    this.state.int &&
                    this.state.wis &&
                    this.state.cha ? <>
                        <br />
                        <Button fluid style={{ background: '#641212', color: 'white' }} onClick={() => this.submitChoices()}>Submit and Continue!</Button>
                    </>
                    :
                    <><br />
                        <Button fluid style={{ background: '#641212', color: 'white' }} disabled>Fill in all Stats to Continue</Button>
                    </>}
            </div>
        </>
        )
    }
}

const mapStateToProps = state => ({
    char: state.newCharacterReducer
});
export default connect(mapStateToProps)(Stats);
