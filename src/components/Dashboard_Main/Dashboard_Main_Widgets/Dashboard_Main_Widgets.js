import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DashboardMainToday from '../Dashboard_Main_Today/Dashboard_Main_Today';


class Dashboard_Main_Widgets extends Component {
    render() { 
        return ( 
            <>
            <div className="dashboard-widgets">
                <DashboardMainToday />
            </div>
        </>
         );
    }
}

export default Dashboard_Main_Widgets;