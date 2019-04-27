import React from 'react';
// import { Alerts, Breadcrumbs, Buttons, Carousel, Dropdowns, Media, NavBar} from 'reactstrap';
//import PropTypes from 'prop-types';
//import MongoDB from 'mongodb';
import './Header.css';

class Header extends React.Compontent {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            isLoading: true
        };
        console.log(this.state.recipes);
    } 


    ComponentDidMount() {
        
        

    }
    
    render() {
        return(
            <div>
                <h1>My First React Program!</h1>
                
            </div>    
        );
    }

}

export default Header;