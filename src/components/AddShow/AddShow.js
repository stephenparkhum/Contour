import React, {Component} from 'react';
import './AddShow.css';

class AddShow extends Component {
    render() { 
        return ( 
            <div>
            <h2>Add Show</h2>
            <form className="add-show-form">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" required/>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" id="location" required/>
                <label htmlFor="venue">Venue</label>
                <input type="text" name="venue" id="venue" required/>
                <label htmlFor="support-band">Support Bands</label>
                <input type="text" name="support-band" id="support-band" required/>
                <label htmlFor="fb-event-link">Facebook Event Link</label>
                <input type="text" name="fb-event-link" id="fb-event-link" required/>
                <input type="submit" value="Add Show" />
                <button className="cancel-btn">Cancel</button>
            </form>
            </div>
         );
    }
}
 
export default AddShow;