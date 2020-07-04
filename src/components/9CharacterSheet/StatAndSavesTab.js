import React, { Component } from 'react'
import { Input, Grid, Divider, Button } from 'semantic-ui-react'

class StatAndSavesTab extends Component {
    state = {
        char: this.props.char,

        str: this.props.char.str,
        dex: this.props.char.dex,
        con: this.props.char.con,
        int: this.props.char.int,
        wis: this.props.char.wis,
        cha: this.props.char.cha,
        mod: {
            str: Math.floor((this.props.char.str - 10) / 2),
            dex: Math.floor((this.props.char.dex - 10) / 2),
            con: Math.floor((this.props.char.con - 10) / 2),
            int: Math.floor((this.props.char.int - 10) / 2),
            wis: Math.floor((this.props.char.wis - 10) / 2),
            cha: Math.floor((this.props.char.cha - 10) / 2)
        }

    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,

            [type]: parseInt(event.target.value)


        })
    }
    updateMods = () => {
        this.setState({
            ...this.state,
            mod: {
                str: Math.floor((this.state.str - 10) / 2),
                dex: Math.floor((this.state.dex - 10) / 2),
                con: Math.floor((this.state.con - 10) / 2),
                int: Math.floor((this.state.int - 10) / 2),
                wis: Math.floor((this.state.wis - 10) / 2),
                cha: Math.floor((this.state.cha - 10) / 2)
            }

        })
    }
    render() {
        let char = this.props.char
        let stat = this.state
        let mod = this.state.mod
        return (
            <div >
                <h3> {char.name} the {char.race} {char.class}: Lv:1</h3>
                <div className="combatStats">
                    <h5>Health Pool:{char.total_health}</h5>
                    <h5>Armor Class:{this.props.findArmorClass(char.equipment, char)} {char.equipment.includes('shield') && `| with shield: ${this.props.findArmorClass(char.equipment, char) + 2}`}</h5>
                </div>
                <br />
                <Grid columns={2} divided>
                    <Grid columns={2} >
                        <h3><u>Ability Scores</u></h3>
                        <Grid.Row>

                            <Grid.Column>
                                <Input defaultValue={stat.str}
                                    onChange={(event) => this.handleChange(event, 'str')}
                                    type="number"
                                    label="Str:"
                                    labelPosition='left corner'
                                    color='red'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column>
                                <Input value={mod.str}

                                    type="number"
                                    label="mod:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                <Input defaultValue={stat.dex}
                                    onChange={(event) => this.handleChange(event, 'dex')}
                                    type="number"
                                    label="Dex:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column>
                                <Input value={mod.dex}

                                    type="number"
                                    label="mod:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                <Input defaultValue={stat.con}
                                    onChange={(event) => this.handleChange(event, 'con')}
                                    type="number"
                                    label="Con:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column>
                                <Input value={mod.con}

                                    type="number"
                                    label="mod:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                <Input defaultValue={stat.int}
                                    onChange={(event) => this.handleChange(event, 'int')}
                                    type="number"
                                    label="Int:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column>
                                <Input value={mod.int}

                                    type="number"
                                    label="mod:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                <Input defaultValue={stat.wis}
                                    onChange={(event) => this.handleChange(event, 'wis')}
                                    type="number"
                                    label="Wis:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column>
                                <Input value={mod.wis}

                                    type="number"
                                    label="mod:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Divider />
                        <Grid.Row>
                            <Grid.Column>
                                <Input defaultValue={stat.cha}
                                    onChange={(event) => this.handleChange(event, 'cha')}
                                    type="number"
                                    label="Cha:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                            <Grid.Column>
                                <Input value={mod.cha}

                                    type="number"
                                    label="mod:"
                                    labelPosition='left corner'
                                    min="1"
                                    max="20" />
                            </Grid.Column>
                        </Grid.Row>
                        <Button  color='black' style={{width:'100%', height: '30px', padding: '0', margin: '0' }} onClick={() => this.updateMods()}>update modifiers</Button>
                    </Grid>
                    <Grid >

                    </Grid>
                </Grid>

            </div>
        )
    }

}

export default StatAndSavesTab;