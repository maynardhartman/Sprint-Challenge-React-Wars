import React from 'react';
import LOGO from './Recipes.png';
import "./NavBar.css";

// import Bootstrap from 'bootstrap';
// import SearchBar from '../SearchBar/SearchBar.js';
// Navigation Bar with logo, search bar, and nav text

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logoURL: LOGO,
            menuText: ["Meals", "Recipes", "About", "Help"],
            headerText: ""
        };
        
}

    componentDidMount() {
        const {
            Stitch,
            RemoteMongoClient,
            AnonymousCredential
        } = require('mongodb-stitch-browser-sdk');
        
        const client = Stitch.initializeDefaultAppClient('recipes-kbhcx');
        
        const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Recipes');
        
        client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
          db.collection('Recipes').updateOne({owner_id: client.auth.user.id, userFName: "Maynard", userLName: "Hartman", userId: "mjhartman@brighthouse.com"}, {$set:{number:42}}, {upsert: true})
        ).then(() =>
          db.collection('Recipes').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
        ).then(docs => {
            console.log("Found docs", docs)
            console.log("[MongoDB Stitch] Connected to Stitch")
        }).catch(err => {
            console.error(err)
        });
    }

    
    

    render() {
        
        return(
            <div className="header">
            <img className="header-img" src={this.state.logoURL} alt="Recipes Logo" />
            <h5 className="header-menu">{this.state.menuText[0]}</h5>
            <h5 className="header-menu">{this.state.menuText[1]}</h5>
            <h5 className="header-menu">{this.state.menuText[2]}</h5>
            <h5 className="header-menu">{this.state.menuText[3]}</h5>
            
            <form>
                <div>
                <input name="name" action='' method='get'></input>
                </div>
            </form>
            
           
            <h5 className="header-text"><a href="top">Sign Up</a> or <a href="top">Sign In</a></h5>
            

            <div className="header-body" >
            
               <h5 className="header-text">Welcome To Recipes.<br/>
               Where recipes are when you need them.</h5>
               
            </div>
            </div> 
        );
    }    
    

    

    
}



export default NavBar;