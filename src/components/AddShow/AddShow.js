import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AddShow.css';
import ContourContext from '../App/AppContext';

class AddShow extends Component {
    render() { 
        return (
            <ContourContext.Consumer>
                {value => {
                    return (
                        <div>
                            <h2>Add Show</h2>
                            <form className="add-show-form" onSubmit={value.addShowSubmit}>
                                <label htmlFor="date">Date</label>
                                <input type="date" name="date" id="date" required/>
                                <label htmlFor="location">Location</label>
                                <input type="text" name="location" id="location" required/>
                                <label htmlFor="venue">Venue</label>
                                <input type="text" name="venue" id="venue" required/>
                                <label htmlFor="venue_address">Venue Address</label>
                                <input type="text" name="venue_address" id="venue_address" required/>
                                <label htmlFor="support_bands">Support Bands</label>
                                <input type="text" name="support_bands" id="support_bands" required/>
                                <label htmlFor="load_in">Load-In</label>
                                <input type="text" name="load_in" id="load_in" required/>
                                <label htmlFor="load_out">Load-Out</label>
                                <input type="text" name="load_out" id="load_out" required/>
                                <label htmlFor="set_time">Set Time</label>
                                <input type="text" name="set_time" id="set_time" required/>
                                <label htmlFor="fb_event_link">Facebook Event Link</label>
                                <input type="text" name="fb_event_link" id="fb_event_link" required/>
                                <input type="submit" value="Add Show" />
                            </form>
                            <Link to="/dashboard/shows"><button className="cancel-btn">Cancel</button></Link>
                        </div>
                    )
                }}
            </ContourContext.Consumer> 
            
         );
    }
}
 
export default AddShow;