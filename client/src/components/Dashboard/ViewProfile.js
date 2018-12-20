import React, { Component } from 'react';
import axios from 'axios';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';
import { withRouter } from "react-router";
import {  
    Navbar, Nav, NavItem, NavDropdown, MenuItem
} from 'react-bootstrap';

class ViewProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            username:'',
            profilePicture: '',
            id: this.props.social_id
        }
    }
    componentDidMount(){
        let data = {
            social_signin: this.props.location.state.id
        }
        console.log('id...', data)
        axios.post("/auth/profile", data)
            .then(res => {
                console.log(res.data)
                this.setState({
                    name: res.data.profile_data.name,
                    username: res.data.profile_data.username,
                    profilePicture: res.data.profile_data.image
                })
            })
    }

    render(){

        return (
            // <Navbar inverse collapseOnSelect fluid fixedTop>
            //     <Navbar.Header>
            //         <Navbar.Brand>
            //         <a href="#brand">React-Bootstrap</a>
            //         </Navbar.Brand>
            //         <Navbar.Toggle />
            //     </Navbar.Header>
            //     <Navbar.Collapse>
            //         <Nav>
            //         <NavItem eventKey={1} href="#">
            //             Link
            //         </NavItem>
            //         <NavItem eventKey={2} href="#">
            //             Link
            //         </NavItem>
            //         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            //             <MenuItem eventKey={3.1}>Action</MenuItem>
            //             <MenuItem eventKey={3.2}>Another action</MenuItem>
            //             <MenuItem eventKey={3.3}>Something else here</MenuItem>
            //             <MenuItem divider />
            //             <MenuItem eventKey={3.3}>Separated link</MenuItem>
            //         </NavDropdown>
            //         </Nav>
            //         <Nav pullRight>
            //             <NavItem eventKey={1} href="#">
            //                 <label>{this.state.name}</label>
            //             </NavItem>
            //             <NavItem eventKey={2} href="#">
            //                 <img alt="" src={this.state.profilePicture} style={{ borderRadius: "50%", width: '30px', height: '30px'}} />
            //             </NavItem>
            //         </Nav>
            //     </Navbar.Collapse>
            // </Navbar>

            <Navbar inverse collapseOnSelect fluid fixedTop>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Brand</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Navbar.Text>
                    Signed in as: <Navbar.Link href="#">{this.state.name}</Navbar.Link>
                </Navbar.Text>
                <Navbar.Text pullRight>
                    <div>
                        <a style={{marginRight: "15px", color: "#fff"}}>Profile</a>
                        <img alt="" src={this.state.profilePicture} style={{ borderRadius: "50%", width: '30px', height: '30px', marginRight: "15px"}} />
                    </div>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(ViewProfile);