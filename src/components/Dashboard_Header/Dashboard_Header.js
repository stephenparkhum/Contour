import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Dashboard_Header.css';
import './Dashboard_Header_Mobile.css';

class Dashboard_Header extends Component {
    render() { 
        return ( 
            <header className="dashboard-header">
                <h2><span className="logo-color">DEMO ARTIST</span> - <small><Link to="/home">Exit Demo</Link></small></h2>
            </header>
         );
    }
}
 
export default Dashboard_Header;