import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import anvil from './Anvil.png'
import './Nav.css';

import { Sidebar, Menu, Icon, Button, Modal } from 'semantic-ui-react';

class Nav extends Component {
  state = {
    visible: false,
    loginModal: false,
    loggingIn: false
  }
  render() {
    return (
      <div className="nav">
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          inverted
          vertical
          visible={this.state.visible}
          width='thin'
        >
          <Menu.Item style={{ textAlign: 'left', minHeight: '40px' }}>
            <Icon inverted size="large" onClick={() => this.setState({ ...this.state, visible: !this.state.visible })} name='close' />
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', minHeight: '40px' }}>
          {
              this.props.user.id ?
              <>
                <Link to='/home'>
                <Icon  name='home' onClick={()=>this.setState({...this.state,visible:!this.state.visible})}/><br/>
                Home
                </Link>
              </>
              :
              <>
                <Link to='/home' onClick={() => this.setState({ ...this.state, visible: !this.state.visible })}>
                Login/Register
                </Link>
              </>
            }
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', minHeight: '40px' }}>
          {
              <>
                <Link to='/about' onClick={()=>this.setState({...this.state,visible:!this.state.visible})}>
                <Icon size="large"  name='info circle' /><br/>
                about
                </Link>
              </>
             
            }
          </Menu.Item>
          <Menu.Item style={{ textAlign: 'center', minHeight: '40px' }} onClick={()=>this.setState({...this.state,visible:!this.state.visible})}>
          {this.props.user.id && (
            < >
              <LogOutButton className="nav-link" />
            </>
          )}
          </Menu.Item>
        </Sidebar>

            <Icon className="icon" size='big' onClick={()=>this.setState({...this.state,visible:!this.state.visible})} name='bars' />
  
        
        <div className="nav-right">
        <Link to="/home">
          <h2 className="nav-title">Forge</h2>
          <img alt='anvil' src={anvil} />
        </Link>
        </div>
      </div>
    )
  }
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
