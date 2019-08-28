import React, {Component} from 'react';
import './Dashboard_Shows_List.css';
import './Dashboard_Shows_List_Mobile.css';

class Dashboard_Shows extends Component {
    render() { 
        return ( 
            <div className="shows-list">
                <table>
                <thead>
                    <tr>
                            <th>Date</th>
                            <th>Venue</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Tour</th>
                            <th>Support</th>
                        </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    <tr>
                        <td>7/19/2019</td>
                        <td>High Water Mark</td>
                        <td>Portland</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>Velnias</td>
                    </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Dashboard_Shows;