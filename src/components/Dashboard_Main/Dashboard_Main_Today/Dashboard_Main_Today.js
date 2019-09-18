import React, {Component} from 'react';
import './Dashboard_Main_Today.css';
import './Dashboard_Main_Today_Mobile.css';
import ContourContext from '../../App/AppContext';
import {format} from 'date-fns';


class DashboardMainToday extends Component {

    render() { 

        return ( 
            <ContourContext.Consumer>
                {value => {
                    return (
                        <>
                        <>
                            <h2 className="today-header">Today</h2>
                            <div className="dashboard-today-widget">
                                <h3>Portland, OR</h3>
                                <p><small>8/27/2109</small></p>
                                <ul>
                                    <li><strong>Venue:</strong> High Water Mark</li>
                                    <li><strong>Address:</strong> 1234 Main St, Portland, Oregon</li>
                                    <li><strong>Load-In</strong> 2pm</li>
                                    <li><strong>Soundcheck:</strong> 5pm</li>
                                    <li><strong>Set Time:</strong> 10pm</li>
                                </ul>
                            </div>
                        </>
                        </>
                    )
                }}
            </ContourContext.Consumer>
            
         );
    }
}
 
export default DashboardMainToday;