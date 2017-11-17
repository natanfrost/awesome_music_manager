import React, { Component } from 'react';
import './App.css';

class Profile extends Component{
    render(){

        let artist = {
            name: '',
            followers: {total: 0}
        };

        if(this.props.artist !== null){
            artist = this.props.artist;
        }

        return(
            <div>
                <div>{artist.name}</div>      
                <div>Followers: {artist.followers.total}</div>
            </div>  
        )
    }
}

export default Profile;