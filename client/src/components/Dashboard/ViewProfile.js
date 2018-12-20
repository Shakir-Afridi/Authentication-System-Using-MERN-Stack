import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';

// import profilePicture from '../../assets/images/profile.jpg';

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
        // console.log('profile...',  this.props.getSocialId())
        let data = {
            social_signin: this.state.id
        }
        console.log('id...', data)
        // axios.post("/auth/profile", data)
        //     .then(res => {
        //         console.log(res.data)
        //         this.setState({
        //             name: res.data.profile_data.name,
        //             username: res.data.profile_data.username,
        //             profilePicture: res.data.profile_data.image
        //         })
        //     })
    }

    render(){

        return (
            <div>
                <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Page 2</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">{this.state.name}</a></li>
                        <li><img alt="" src={this.state.profilePicture} style={{ marginTop: "5%", borderRadius: "50%", width: '40%', height: '40%'}} /></li>
                    </ul>
                </div>
                </nav>
                
                <div class="container">
                <h3>Right Aligned Navbar</h3>
                <p>The .navbar-right class is used to right-align navigation bar buttons.</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        social_id: state.socialIdReducer.socialId
    }
}

export default connect(mapStateToProps, actions)(ViewProfile);