import React, { Component } from 'react';

// components
import EditProfile from './EditProfile';
import ViewProfile from './ViewProfile';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div style={{textAlign: 'center'}}>
                <ViewProfile />
            </div>
        )
    }
}

export default Profile;