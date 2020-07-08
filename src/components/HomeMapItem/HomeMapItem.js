import React, { Component } from 'react'
import { connect } from 'react-redux';
//styling
import { Divider, Button, Input, Item, Image, Icon, Dropdown, Header, Modal } from 'semantic-ui-react'



class HomeMapItem extends Component {
    state = {
        newName: this.props.char.name,
        newPic: this.props.char.portrait || '',
        name: false,
        open: false,
        portrait: false
    }
    show = (dimmer) => () => this.setState({ ...this.state, dimmer, open: true })
    close = () => this.setState({ ...this.state, open: false })
    componentDidMount() {
        this.props.dispatch({ type: 'GET_CHARACTERS' })
    }
    deleteChar = () => {
        this.props.dispatch({ type: 'DELETE_CHARACTER', payload: this.props.char.id })
        this.close()
    }
    changeName = (data) => {
        console.log(data)
        this.props.dispatch({ type: 'CHANGE_NAME', payload: { id: data, name: this.state.newName } })
        this.setState({ ...this.state, name: false, portrait: false })
    }
    changePic = (data) => {
        console.log(data)
        this.props.dispatch({ type: 'CHANGE_PIC', payload: { id: data, portrait: this.state.newPic } })
        this.setState({...this.state,portrait:false})
    }
    toggleEdit = (type) => {
        this.setState({
            [type]: !this.state.edit
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
        const { open, dimmer } = this.state
        return (<>
            <div className='individualChar'>
                <Item.Group relaxed unstackable>
                    <Item >
                        <Image size='tiny' style={{ padding: '1px', border: '2px solid #021a40', backgroundColor: 'darkgray', borderRadius: '4px' }} src={this.props.char.portrait || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/811a2908-404c-4d71-b6d2-0b4e737898e1/dd7ujlf-d2ef5bf2-a0a8-4578-83e5-f0e01c3b375a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODExYTI5MDgtNDA0Yy00ZDcxLWI2ZDItMGI0ZTczNzg5OGUxXC9kZDd1amxmLWQyZWY1YmYyLWEwYTgtNDU3OC04M2U1LWYwZTAxYzNiMzc1YS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VbDb7DLBgJYYY90Jb7LUq5thiWlyo65M73Q0SX3I-Zw'} />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header > {this.state.name ? <>
                                <Input size='mini'
                                    label='Name'
                                    defaultValue={this.state.newName}
                                    placeholder="New Name"
                                    onChange={(event) => this.handleChange(event, 'newName')} />
                                <br />
                                <Button inverted color="violet"
                                    size='tiny'
                                    onClick={() => this.changeName(this.props.char.id)}>Save</Button>
                            </>
                                : <> <h3>{this.props.char.name}</h3><h5>{this.props.char.race} {this.props.char.class}</h5>
                                    {this.state.portrait && <>
                                        <Input labelPosition='left corner'
                                            label='URL'
                                            size='mini'
                                            defaultValue={this.state.newPic}
                                            onChange={(event) => this.handleChange(event, 'newPic')} />
                                        <Button inverted color="violet"
                                            size='tiny'
                                            onClick={()=>this.changePic(this.props.char.id)}>Save</Button></>}</>}
                            </Item.Header>
                            <Item.Description >
                                <Icon size='big' style={{ marginLeft: '75%' }}>  <Dropdown
                                    icon='edit'
                                    compact
                                    inline
                                    direction='left'
                                    color='black'
                                    className='icon' >
                                    <Dropdown.Menu>
                                        <Dropdown.Header icon='edit' />
                                        <Dropdown.Divider />
                                        <Dropdown.Item icon='attention' text='Delete' onClick={this.show(true)} />
                                        <Dropdown.Item icon='comment' text='Edit Name' onClick={() => this.toggleEdit('name')} />
                                        <Dropdown.Item icon='picture' text='Edit Picture' onClick={() => this.toggleEdit('portrait')} />
                                    </Dropdown.Menu>
                                </Dropdown></Icon>
                            </Item.Description>
                            <Item.Extra>
                                <p style={{ color: 'black' }}>LV: 1</p>
                                <Button fluid  style={{background:' black',color:'white', border:'3px solid maroon'}} onClick={() => this.props.sendToSheet(this.props.char)}>
                                    View Character Sheet
                            </Button>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Divider fitted />
                </Item.Group>
            </div>
            <Modal dimmer={dimmer} open={open} onClose={this.close}>
                <Modal.Header>Delete</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <Image
                            size='small'
                            style={{ padding: '10px', borderRadius: '4px', float: 'left' }}
                            src={this.props.char.portrait || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/811a2908-404c-4d71-b6d2-0b4e737898e1/dd7ujlf-d2ef5bf2-a0a8-4578-83e5-f0e01c3b375a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODExYTI5MDgtNDA0Yy00ZDcxLWI2ZDItMGI0ZTczNzg5OGUxXC9kZDd1amxmLWQyZWY1YmYyLWEwYTgtNDU3OC04M2U1LWYwZTAxYzNiMzc1YS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.VbDb7DLBgJYYY90Jb7LUq5thiWlyo65M73Q0SX3I-Zw'} />
                        <Header>Delete {this.props.char.name}?</Header>
                        <p>
                            {this.props.char.name} will be deleted forever.
                        </p>
                        <p>Is that what you want?</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={this.close}>
                        Nope
            </Button>
                    <Button
                        negative
                        icon='exclamation'
                        labelPosition='right'
                        content="Yes, delete away!"
                        onClick={() => this.deleteChar()}
                    />
                </Modal.Actions>
            </Modal>
        </>
        )
    }

}

export default connect()(HomeMapItem);