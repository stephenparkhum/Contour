import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Dashboard_Nav.css';

class Dashboard_Nav extends Component {
    render() { 
        return ( 
            <> 
            <nav className="dashboard-nav">
                <ul>
                    <li><NavLink exact to="/dashboard" activeClassName="dashboard-nav-active">Home</NavLink></li>
                    <li><NavLink to="/dashboard/shows" activeClassName="dashboard-nav-active">Shows</NavLink></li>
                    <li><NavLink to="/dashboard/tours" activeClassName="dashboard-nav-active">Tours</NavLink></li>
                    <li><NavLink to="/dashboard/finances" activeClassName="dashboard-nav-active">Finances</NavLink></li>
                    <li><NavLink to="/dashboard/profile" activeClassName="dashboard-nav-active">Profile</NavLink></li>
                    <li className="add-btn"><NavLink to="/dashboard/add-show" activeClassName="dashboard-nav-active">Add Show +</NavLink></li>
                    <li className="add-btn"><NavLink to="/dashboard/add-tour" activeClassName="dashboard-nav-active">Add Tour +</NavLink></li>
                </ul>
            </nav>
            </>
         );
    }
}
 
export default Dashboard_Nav;