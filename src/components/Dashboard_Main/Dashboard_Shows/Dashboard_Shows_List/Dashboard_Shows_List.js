import React, {Component} from 'react';
import './Dashboard_Shows_List.css';
import './Dashboard_Shows_List_Mobile.css';
import ContourContext from '../../../App/AppContext';

class Dashboard_Shows extends Component {
    render() { 

        const displaySupportBands = (value) => {
            if (value.length == 2) {
                return (value.join(' & '));
            } else {
                return (value.join(', '));
            }
        };

        const getShowsList = (value) => {
          return (
              value.shows.map(show => {
                  return (
                    <tr key={show.id}>
                        <td>{show.date}</td>
                        <td>{show.venue}</td>
                        <td>{show.location}</td>
                        <td>Oregon</td>
                        <td>West Coast Tour 2019</td>
                        <td>{displaySupportBands(show.support_bands)}</td>
                    </tr>
                  );
              })
          )  
        };

        return ( 
            <ContourContext.Consumer>
            {value => {
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
                        {getShowsList(value)}
                        </tbody>
                        </table>
                    </div>
                )
            }}
                
            </ContourContext.Consumer>
            
         );
    }
}
 
export default Dashboard_Shows;