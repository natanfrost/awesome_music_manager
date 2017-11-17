import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: '',
            artist: null
        }
    }
    
    search(){
        var token = 'BQCAaOrzyvCAOEGM2rFphF6qqQLeZ9Ia1R8NKht-O8xAr3hUMDTZStXtaX_RV2qftFBFaQgHoiJGbyvjDnlc0Q3xxPzgJ8fQSZgwOqpIiyQLtF9JpylGJluzZ2S718aQGBpJDWdiyQ8OtDqF2FVz9gFT2k2q'
        const BASE_URL = 'https://api.spotify.com/v1/search?q='
        const FETCH_URL = `${BASE_URL}${this.state.query}&type=artist&limit=1`;
        fetch(FETCH_URL, {
            method: 'GET',
            headers:{
                'Authorization': 'Bearer ' + token 
            },
            mode: 'cors',
            cache: 'default'
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            const artist = json.artists.items[0];
            this.setState({artist});
            console.log(artist);
        
        });
    }

    render(){        
        return(
            <div>
                <div className="title">Awesome Music Manager</div>
                
                <FormGroup>
                    <InputGroup>
                        <FormControl                             
                            type="text"
                            placeholder="Search for a music in a galaxy far far away..." 
                            onChange={e => {this.setState({query: e.target.value})}}
                            onKeyPress={e => {
                                if(e.key === 'Enter'){
                                    this.search()
                                }
                            }}
                        />           
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>                                 
                </FormGroup>                        

                <Profile artist={this.state.artist}/>

                <div className="gallery">
                    
                </div>

            </div>
        )
    }
}

export default App;