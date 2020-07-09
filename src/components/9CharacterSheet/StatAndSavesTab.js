import React, { Component } from 'react'
import { Input, Grid, Divider, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
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
        },
        hp: this.props.char.total_health,
        ac: '',
        move: ''

    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: parseInt(event.target.value)
        })
    }
    updateMods = () => {
        //    let char=this.state
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
        // this.props.dispatch({type:'UPDATE_ABILITIES',payload:{str:parseInt(char.str), dex:parseInt(char.dex), con:parseInt(char.con), int:parseInt(char.int), wis:parseInt(char.wis), cha:parseInt(char.cha), id:parseInt(this.props.char.id)}})
    }
    findSave = (word, stat) => {
        let save;
        switch (true) {
            case this.props.char.saves.includes(word):
                save = (stat + 2)
                return save
            default:
                return stat
        }
    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }
    render() {
        let char = this.props.char
        let stat = this.state
        let mod = this.state.mod
        return (
            <div className="stats" >
                <h3> {char.name} the {char.race} {char.class}: Lv:1</h3>


                <br />
                <Grid columns={2} style={{ overflowX: 'hidden' }} >
                    <Grid.Row>
                        <Grid.Column>
                            {char.equipment.includes('shield') ?
                                <Input style={{ width: '25vw', padding: '0' }}
                                    defaultValue={this.props.findArmorClass(char.equipment, char) + 2}
                                    type="number"
                                    label='Armor'
                                    labelPosition='left'
                                    onChange={(event) => this.handleChange(event, 'ac')}
                                />
                                :
                                <Input style={{ width: '25vw', padding: '0' }}
                                    defaultValue={this.props.findArmorClass(char.equipment, char)}
                                    type="number"
                                    label='Armor:'
                                    labelPosition='left'
                                    onChange={(event) => this.handleChange(event, 'ac')}
                                />
                            }
                        </Grid.Column>
                        <Grid.Column>
                            <Input style={{ width: '25vw', padding: '0' }}
                                defaultValue={char.total_health}
                                type="number"
                                label={'/' + char.total_health + ' HP'}
                                labelPosition='right'
                                onChange={(event) => this.handleChange(event, 'hp')}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Input style={{ width: '20.5vw', padding: '0' }}
                                value={+mod.dex}
                                type="number"
                                label='Initiative'
                                labelPosition='left'
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Input style={{ width: '25vw', padding: '0' }}
                                defaultValue='30'
                                type="text"
                                label='ft move'
                                labelPosition='right'
                                onChange={(event) => this.handleChange(event, 'move')}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid columns={4} style={{ width: '95vw' }}  >
                    <Grid.Row>
                        <Grid.Column><h4><u>Ability</u></h4></Grid.Column>
                        <Grid.Column><h4><u>Scores</u></h4></Grid.Column>
                        <Grid.Column><h4><u>Modifiers</u></h4></Grid.Column>
                        <Grid.Column><h4><u>Saving Throws</u></h4></Grid.Column>
                    </Grid.Row>
                    <Grid.Row >
                        <Button
                         
                            style={{width: '100vw',margin: 'auto',background:'black', color:'white', border:'3px solid maroon'}}
                            onClick={() => this.updateMods()}
                        >update mods & saves</Button>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column><h2>Str:</h2></Grid.Column>
                        <Grid.Column>
                            <Input defaultValue={stat.str}
                                onChange={(event) => this.handleChange(event, 'str')}
                                type="number"
                                label="Score"
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
                        <Grid.Column>
                            <Input value={this.findSave('Strength', mod.str)}

                                type="number"
                                label="Save:"
                                labelPosition='left corner'
                                min="1"
                                max="20" />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column><h2>Dex:</h2></Grid.Column>
                        <Grid.Column>
                            <Input defaultValue={stat.dex}
                                onChange={(event) => this.handleChange(event, 'dex')}
                                type="number"
                                label="Score:"
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
                        <Grid.Column>
                            <Input value={this.findSave('Dexterity', mod.dex)}

                                type="number"
                                label="Save:"
                                labelPosition='left corner'
                                min="1"
                                max="20" />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column><h2>Con:</h2></Grid.Column>
                        <Grid.Column>
                            <Input defaultValue={stat.con}
                                onChange={(event) => this.handleChange(event, 'con')}
                                type="number"
                                label="Score:"
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
                        <Grid.Column>
                            <Input value={this.findSave('Constitution', mod.con)}

                                type="number"
                                label="Save:"
                                labelPosition='left corner'
                                min="1"
                                max="20" />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column><h2>Int:</h2></Grid.Column>
                        <Grid.Column>
                            <Input defaultValue={stat.int}
                                onChange={(event) => this.handleChange(event, 'int')}
                                type="number"
                                label="Score:"
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
                        <Grid.Column>
                            <Input value={this.findSave('Intelligence', mod.int)}

                                type="number"
                                label="Save:"
                                labelPosition='left corner'
                                min="1"
                                max="20" />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column><h2>Wis:</h2></Grid.Column>
                        <Grid.Column>
                            <Input defaultValue={stat.wis}
                                onChange={(event) => this.handleChange(event, 'wis')}
                                type="number"
                                label="Score:"
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
                        <Grid.Column>
                            <Input value={this.findSave('Wisdom', mod.wis)}

                                type="number"
                                label="Save:"
                                labelPosition='left corner'
                                min="1"
                                max="20" />
                        </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column><h2>Cha:</h2></Grid.Column>
                        <Grid.Column>
                            <Input defaultValue={stat.cha}
                                onChange={(event) => this.handleChange(event, 'cha')}
                                type="number"
                                label="Score:"
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
                        <Grid.Column>
                            <Input value={this.findSave('Charisma', mod.cha)}

                                type="number"
                                label="Save:"
                                labelPosition='left corner'
                                min="1"
                                max="20" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </div>
        )
    }

}

export default connect()(StatAndSavesTab);