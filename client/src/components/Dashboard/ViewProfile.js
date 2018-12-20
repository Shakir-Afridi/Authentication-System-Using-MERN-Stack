import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
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
        let data;
        if (this.props.location.state.id){
            data = {
                social_signin: this.props.location.state.id
            }
        } else {
            data = {
                username: this.props.location.state.username
            }
        }
        console.log('data...', data)
        axios.post("/auth/profile", data)
            .then(res => {
                console.log('res...', res)
                if (!_.isEmpty(res.data)){
                    this.setState({
                        name: res.data.profile_data.name,
                        username: res.data.profile_data.username,
                        profilePicture: res.data.profile_data.image
                    })
                }
            })
    }

    render(){
        console.log(this.state.username)
        return (
            <Navbar inverse collapseOnSelect fluid fixedTop>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Brand</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Navbar.Text>
                    Signed in as: <Navbar.Link href="#">{this.state.name ? this.state.name : this.state.username}</Navbar.Link>
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