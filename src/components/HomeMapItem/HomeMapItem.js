import React, { Component } from 'react'
import { connect } from 'react-redux';
//styling
import { Container, Divider, Button, Input, Item, Image } from 'semantic-ui-react'


class HomeMapItem extends Component {
    state = {
        newName: '',
        edit: false
    }
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    deleteChar = (id) => {
        this.props.dispatch({ type: 'DELETE_CHARACTER', payload: id })
    }
    changeName = (data) => {
        console.log(data)
        this.props.dispatch({ type: 'CHANGE_NAME', payload: { id: data, name: this.state.newName } })
        this.toggleEdit()
    }
    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    handleChange = (event, type) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }

    render() {
        return <div className='individualChar'>
            <Item.Group relaxed divided unstackable>
                <Item>
                    <Item.Image size='tiny' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/811a2908-404c-4d71-b6d2-0b4e737898e1/dd7ujlf-d2ef5bf2-a0a8-4578-83e5-f0e01c3b375a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODExYTI5MDgtNDA0Yy00ZDcxLWI2ZDItMGI0ZTczNzg5OGUxXC9kZDd1amxmLWQyZWY1YmYyLWEwYTgtNDU3OC04M2U1LWYwZTAxYzNiMzc1YS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VbDb7DLBgJYYY90Jb7LUq5thiWlyo65M73Q0SX3I-Zw' />

                    <Item.Content verticalAlign='middle'>
                        <Item.Header>{this.state.edit ? <>
                            <Input label='Name' value={this.state.newName} placeholder="New Name" onChange={(event) => this.handleChange(event, 'newName')} />
                            <Button onClick={() => this.changeName(this.props.char.id)}>Save</Button>
                        </>
                            : <h3>{this.props.char.name}</h3>}</Item.Header>
                        <Item.Description><p>{this.props.char.race} {this.props.char.class}</p></Item.Description>
                        <Item.Extra>
                            <Button.Group floated='right' vertical>
                                <Button floated='right' onClick={() => this.props.sendToSheet(this.props.char)}>View Sheet</Button>
                                {/* <Button onClick={() => this.toggleEdit()}>edit name</Button>
                                <Button onClick={() => this.deleteChar(this.props.char.id)}>delete</Button> */}
                            </Button.Group>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                <Divider fitted />
            </Item.Group>
        </div>
    }

}

export default connect()(HomeMapItem);