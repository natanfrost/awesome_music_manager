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
        console.log(this.state);
    }

    render(){        
        return(
            <div>
                <div className="title">Awesome Music Manager</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl                             
                            type="text"
                            placeholder="Search for a music..." 
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