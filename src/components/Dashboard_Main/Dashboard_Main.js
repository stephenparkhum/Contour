import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Dashboard_Nav from './Dashboard_Nav/Dashboard_Nav';
import Dashboard_Shows from './Dashboard_Shows/Dashboard_Shows';
import Dashboard_Tours from './Dashboard_Tours/Dashboard_Tours';
import Dashboard_Main_Widgets from './Dashboard_Main_Widgets/Dashboard_Main_Widgets';
import Dashboard_Finance from '../Dashboard_Finance/Dashboard_Finance';
import AddShow from '../AddShow/AddShow';
import AddTour from '../AddTour/AddTour';
import Profile from '../Profile/Profile';
import './Dashboard_Main.css';

class Dashboard_Main extends Component {
    render() { 
        return ( 
            <div className="dashboard-main">
                <Route path="/dashboard" component={Dashboard_Nav}/>
                <div className="dashboard-feed">
                    <Route exact path="/dashboard" component={Dashboard_Main_Widgets} />
                    <Route path="/dashboard/shows" component={Dashboard_Shows} />
                    <Route path="/dashboard/tours" component={Dashboard_Tours} />
                    <Route path="/dashboard/finances" component={Dashboard_Finance} />
                    <Route path="/dashboard/profile" component={Profile} />
                    <Route path="/dashboard/add-show" component={AddShow} />
                    <Route path="/dashboard/add-tour" component={AddTour} />
                </div>
                
            </div>
         );
    }
}
 
export default Dashboard_Main;