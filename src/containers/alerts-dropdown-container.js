import React, {Component} from 'react';
import AlertsDropdown from '../components/navigation/alerts-dropdown';

class AlertsDropdownContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false
        };
    }

    toggleDropdown() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    render() {
        return (
            <AlertsDropdown
                isDropdownOpen={this.state.isDropdownOpen}
                toogleDropdown={this.toggleDropdown.bind(this)}
            />
        )
    }
}

export default AlertsDropdownContainer;