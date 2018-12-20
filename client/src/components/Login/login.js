import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

// keys 
import Keys from '../../config/keys/keys';

import Profile from '../Dashboard/profile';

let history = createBrowserHistory();
let self;
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        self = this;
    }

    responseGoogle = (response) => {
        let profile_data = response.profileObj;
        let data = {
            name: profile_data.name,
            profile_picture: profile_data.imageUrl,
            username: profile_data.email,
            social_signin: {
                name: 'google',
                id: profile_data.googleId
            }
        }

        self.createUserOrLoggedIn(data, 'google');
    }

    responseFacebook = (response) => {
        let username;
        if (response.email){
            username = response.email
        } else {
            username = response.name
        }
        let data = {
            name: response.name,
            profile_picture: response.picture.data.url,
            username: username,
            social_signin: {
                name: 'facebook',
                id: response.id
            }
        }

        self.createUserOrLoggedIn(data, 'facebook');
    }

    componentDidMount(){
        // console.log('login...', this.props.social_id)
    }

    handleChange(e){
        let {name, value} = e.target
        if (name === "username"){
            self.setState({
                username: value
            })
        } else {
            self.setState({
                password: value
            })
        }
    }

    createUserOrLoggedIn(data, strategy) {
        axios.post("/auth/social_sigin", data)
            .then(res => {
                if(res.status === 200){
                    // this.props.storeSocialId(res.data.data.social_signin.id)
                    if (res.data.code === 208){
                        console.log(res.data)
                    } else {
                        console.log(res.data)
                    }
                    history.push({
                        pathname: '/profile',
                        state: {id: res.data.data.social_signin.id}
                    });
                    history.go('/profile');
                } else {
                    console.log(res)
                }
            })
    }

    signup(){
        history.push('/signup');
        history.go('/signup');
    }

    login(){
        if (self.state.password === "" || self.state.username === ""){
            alert('please fill all the fields')
        } else{
            let data = {
                "username": self.state.username,
                "password": self.state.password
            }
            axios.post('/auth/login', data)
                .then(res => {
                    if (res.data.code === 200){
                        history.push({
                            pathname: '/profile',
                            state: {username: self.state.username}
                        });
                        history.go('/profile');
                    } else {
                        alert('do not have account')
                    }
                })
        }
        // history.push('/dashboard');
        // history.go('/dashboard');
    }

    render(){
        console.log('render...', this.props.social_id)
        return(
            <div className="row" style={{ padding: "100px 0"}}>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-page">
                        <div className="row signIn-text">
                            <div className="col-md-12">
                                <h2>Sign In</h2>
                            </div>
                        </div>
                        <div className="row login_inputs">
                            <div className="col-md-12">
                                    <label htmlFor="inp" className="inp">
                                        <input type="text" id="inp" name="username" onChange={self.handleChange} placeholder="&nbsp;"/>
                                        <span className="mylabel">email</span>
                                        <span className="border"></span>
                                    </label>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inp" className="inp">
                                    <input type="password" id="inp" name="password" onChange={self.handleChange} placeholder="&nbsp;"/>
                                    <span className="mylabel">password</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-md-12" style={{paddingTop: "20px"}}>
                                <button className="sigin-btn" onClick={this.login}>Login</button>
                            </div>
                        </div>
                        <div className="col-md-12" style={{paddingTop: "20px", textAlign: 'center'}}>
                            <h4> or login with</h4>
                        </div>
                        <div className="col-md-12 social-media-icons">
                            <div className="row">
                                <div className="col-md-12">
                                    <GoogleLogin
                                        clientId={Keys.google.clientId}
                                        render={renderProps => (
                                            <button className="loginBtn loginBtn--google" onClick={renderProps.onClick}>
                                                    Login with Google
                                            </button>
                                        )}
                                        onSuccess={self.responseGoogle}
                                        onFailure={self.responseGoogle}
                                        />
                                </div>
                                <div className="col-md-12">
                                    <FacebookLogin
                                        appId={Keys.facebook.appId}
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        render={renderProps => (
                                            <button className="loginBtn loginBtn--facebook" onClick={renderProps.onClick}>
                                                Login with Facebook
                                            </button>
                                        )}
                                        callback={self.responseFacebook} 
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row sign-up-btn">
                            <div className="col-md-12">
                                <a onClick={self.signup}>Register Here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
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

export default connect(mapStateToProps, actions)(Login);