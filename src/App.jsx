import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }
    
    search(){
        var token = 'BQDY22y0EsDfRbqM3g9-RiujhQ8Dpf_y-R3GGmSavZpm4gd0xOVJpquEp10_2QF5zi2GNYSfEBc9Er5CAOe0ie8SyAqHYaRHhaBHZgikHtgAiuNZZBS8UkVvcMkeRwY2AJiG7yHFV_3MoHh9OptBTioInAbI&refresh_token=AQAfGolzLLxt9V1eGBjnDDwaeMBPmG8y2E1umBW1xqjX8v90FHQIqMBCzEUGQk82oS3On-F_Ihp29_1cKfEdL1dVjuKxFLRIYZrRFeIfd8IgikAiCMnhXqFPvy_cCOXohUA'
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
        .then(json => console.log(json));
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

                <div className="profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>

                <div className="gallery">
                    Gallery
                </div>

            </div>
        )
    }
}

export default App;