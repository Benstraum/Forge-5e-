import React, { Component } from 'react'
import { TextArea } from 'semantic-ui-react'

class SpellTab extends Component {
    state = {
        spells: ''
    }
    handleChange = (event, type) => {
        this.setState({
            ...this.state,
            [type]: parseInt(event.target.value)
        })
    }
    render() {
        let char = this.props.char
        return (
            <div >
                <div className="spells">
                    <h3><u>Spell Slots</u></h3>

                    <h3><u>SpellBook</u></h3>
                    <TextArea rows={5}
                        style={{ width: '92vw' }}
                        defaultValue=''
                        onChange={(event) => this.handleChange(event, 'spells')} />
                </div>

            </div>
        )
    }

}

export default SpellTab;