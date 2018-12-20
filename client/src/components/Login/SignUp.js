import React, { Component } from 'react';
import axios from 'axios';
import { createBrowserHistory } from 'history';

let history = createBrowserHistory()
let self;
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            confirm_pass: ""
        }
        self = this;
    }

    handleChange(e){
        let {name, value} = e.target
        if (name === "username"){
            self.setState({
                username: value
            })
        } else if (name === "password"){
            self.setState({
                password: value
            })
        } 
        else {
            self.setState({
                confirm_pass: value
            })
        }
    }

    login(){  
        if (self.state.password === "" || self.state.username === ""){
            alert('please fill all the fields')
        } else{
            if (self.state.password !== self.state.confirm_pass){
                alert("password and confirm password doesn't match")
            } else {
                let data = {
                    "username": self.state.username,
                    "password": self.state.password
                }
                axios.post('/auth/createUser', data)
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }

    alreadyHaveAnAccount(){
        history.push('/');
        history.go('/');
    }

    render(){
        return(
            <div className="row" style={{ padding: "100px 0"}}>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="login-page">
                        <div className="row signIn-text">
                            <div className="col-md-12">
                                <h2>Registeration</h2>
                            </div>
                        </div>
                        <div className="row login_inputs">
                            <div className="col-md-12">
                                    <label for="inp" className="inp">
                                        <input type="text" id="inp" name="username" onChange={self.handleChange} placeholder="&nbsp;"/>
                                        <span className="mylabel">username</span>
                                        <span className="border"></span>
                                    </label>
                            </div>
                            <div className="col-md-12">
                                <label for="inp" className="inp">
                                    <input type="password" id="inp" name="password" onChange={self.handleChange} placeholder="&nbsp;"/>
                                    <span className="mylabel">password</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-md-12">
                                <label for="inp" className="inp">
                                    <input type="password" id="inp" name="confirm_pass" onChange={self.handleChange} placeholder="&nbsp;"/>
                                    <span className="mylabel">confirm password</span>
                                    <span className="border"></span>
                                </label>
                            </div>
                            <div className="col-md-12" style={{paddingTop: "20px"}}>
                                <button className="sigin-btn" onClick={this.login}>Register Now</button>
                            </div>
                        </div>
                        <div className="row sign-up-btn" style={{paddingTop: "0px"}}>
                            <div className="col-md-12">
                                <a onClick={this.alreadyHaveAnAccount}>Alread have an account</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

export default SignUp;