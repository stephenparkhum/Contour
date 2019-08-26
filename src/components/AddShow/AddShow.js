import React, {Component} from 'react';
import './AddShow.css';

class AddShow extends Component {
    render() { 
        return ( 
            <div>
            <h2>Add Show</h2>
            <form className="add-show-form">
                <label for="date">Date</label>
                <input type="date" name="date" id="date" />
                <label for="location">Location</label>
                <input type="text" name="location" id="location" />
                <label for="venue">Venue</label>
                <input type="text" name="venue" id="venue" />
                <label for="support-band">Support Bands</label>
                <input type="text" name="support-band" id="support-band" />
                <label for="fb-event-link">Facebook Event Link</label>
                <input type="text" name="fb-event-link" id="fb-event-link" />
                <input type="submit" value="Add Show" />
                <button className="cancel-btn">Cancel</button>
            </form>
            </div>
         );
    }
}
 
export default AddShow;