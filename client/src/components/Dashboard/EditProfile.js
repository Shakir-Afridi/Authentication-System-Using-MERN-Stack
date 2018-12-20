import React, { Component } from 'react';

class EditProfile extends Component {

    render(){

        return (
            <div className="panel panel-default">
                <div className="panel-heading" style={{backgroundColor: '#1f3944', color: 'white', textAlign: 'center'}}> Edit Profile </div>
                <div className="panel-body profile-card-body">
                    <div className="row" style={{paddingTop: "50px"}}>
                        <div className="col-md-6">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">First Name</span>
                            <span className="border"></span>
                        </label>
                        </div>
                        <div className="col-md-6">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Last Name</span>
                            <span className="border"></span>
                        </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Username</span>
                            <span className="border"></span>
                        </label>
                        </div>
                        <div className="col-md-4">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Email</span>
                            <span className="border"></span>
                        </label>
                        </div>
                        <div className="col-md-4">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Company</span>
                            <span className="border"></span>
                        </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">City</span>
                            <span className="border"></span>
                        </label>
                        </div>
                        <div className="col-md-4">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Country</span>
                            <span className="border"></span>
                        </label>
                        </div>
                        <div className="col-md-4">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Postal Code</span>
                            <span className="border"></span>
                        </label>
                        </div>
                    </div>
                    <h4>About me</h4>
                    <div className="row">
                        <div className="col-md-12">
                        <label for="inp" className="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                            <span className="mylabel">Some thing my self</span>
                            <span className="border"></span>
                        </label>
                        </div>
                    </div>
                    <button className="profile-contact-btn" style={{color: 'white', width: '100%'}}>Update Profile</button>
                </div>
            </div>
        )
    }
}

export default EditProfile;