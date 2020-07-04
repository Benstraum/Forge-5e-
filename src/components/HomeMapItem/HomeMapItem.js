import React, { Component } from 'react'
import { connect } from 'react-redux';
//styling
import { Divider, Button, Input, Item, Image, Icon,Dropdown } from 'semantic-ui-react'


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
            <Item.Group relaxed  unstackable>
                <Item >
                    <Image size='tiny' style={{padding:'1px',border:'2px solid #021a40',backgroundColor:'darkgray', borderRadius:'4px'}} src={this.props.char.portrait || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/811a2908-404c-4d71-b6d2-0b4e737898e1/dd7ujlf-d2ef5bf2-a0a8-4578-83e5-f0e01c3b375a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODExYTI5MDgtNDA0Yy00ZDcxLWI2ZDItMGI0ZTczNzg5OGUxXC9kZDd1amxmLWQyZWY1YmYyLWEwYTgtNDU3OC04M2U1LWYwZTAxYzNiMzc1YS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VbDb7DLBgJYYY90Jb7LUq5thiWlyo65M73Q0SX3I-Zw'} />
                    <Item.Content verticalAlign='middle'>
                        <Item.Header > {this.state.edit ? <>
                            <Input  size='mini' label='Name' value={this.state.newName} placeholder="New Name" onChange={(event) => this.handleChange(event, 'newName')} />
                            <br/>
                            <Button inverted color="violet" size='tiny' onClick={() => this.changeName(this.props.char.id)}>Save</Button>
                        </>
                            :<> <h3>{this.props.char.name}</h3><h5>{this.props.char.race} {this.props.char.class}</h5></>}
                            </Item.Header>
                        <Item.Description >
                           <Icon size='big' style={{marginLeft:'75%'}}>  <Dropdown
                                icon='edit'
                                compact
                                inverted
                                inline
                                direction='left'
                                color='black'
                                className='icon' >
                                <Dropdown.Menu>
                                    <Dropdown.Header icon='edit'/>
                                    <Dropdown.Divider />
                                    <Dropdown.Item icon='attention' text='Delete' onClick={() => this.deleteChar(this.props.char.id)}/>
                                    <Dropdown.Item icon='comment' text='Edit Name' onClick={() => this.toggleEdit()}/>
                                </Dropdown.Menu>
                            </Dropdown></Icon>
                            </Item.Description>
                        <Item.Extra>
                            <p>level 1</p>
                            <Button fluid inverted color='purple' onClick={()=>this.props.sendToSheet(this.props.char)}>
                                View Character Sheet
                            </Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
                <Divider fitted />
            </Item.Group>
        </div>
    }

}

export default connect()(HomeMapItem);