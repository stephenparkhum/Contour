import React, {Component} from 'react';
import './Dashboard_Tours_List.css';
import ContourContext from '../../../App/AppContext';


class Dashboard_Tours_List extends Component {
    render() { 


        const calcTourLength = (value) => {
            let startDate = new Date(value.start_date);
            let endDate = new Date(value.end_date);

            let diffTime = endDate.getTime() - startDate.getTime();
            let diffDays = diffTime / (1000 * 3600 * 24);

            return Math.round(diffDays);
        };

        const displayAdditionalBands = (value) => {
            if (value.length === 2) {
                return (value.join(' & '));
            } else {
                return (value.join(', '));
            }
        };

        const getToursList = (value) => {
            return (
                value.tours.map(tour => {
                    return (
                        <tr key={tour.id}>
                            <td>{tour.tour_name}</td>
                            <td>{tour.start_date}</td>
                            <td>{tour.end_date}</td>
                            <td>{tour.country}</td>
                            <td>{calcTourLength(tour)}</td>
                            <td>{displayAdditionalBands(tour.additional_bands)}</td>
                            <td>$2,000</td>
                        </tr>
                    );
                })
            );
                
            }

        return ( 
            <ContourContext.Consumer>
            {value => {
                return (
                    <div className="shows-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Tour Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Country</th>
                                    <th>Shows</th>
                                    <th>Support</th>
                                    <th>Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getToursList(value)}
                            </tbody>
                        </table>
                    </div>
                )
            }}
        </ContourContext.Consumer>
         );
    }
}
 
export default Dashboard_Tours_List;