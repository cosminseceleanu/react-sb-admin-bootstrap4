import React, {Component} from 'react';
import MessagesDropdown from '../components/navigation/messages-dropdown';

class MessagesDropdownContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDropdownOpen: false
        };
    }

    toggleMessagesDropdown() {
        this.setState({
            isDropdownOpen: !this.state.isDropdownOpen
        });
    }

    render() {
        const messages = [
            {
                sender: 'David Miller',
                date: '11: 21 AM',
                text: 'Hey there! This new version of SB Admin is pretty awesome!'
            }
        ];
        return (
           <MessagesDropdown
               isDropdownOpen={this.state.isDropdownOpen}
               toogleDropdown={this.toggleMessagesDropdown.bind(this)}
               messages={messages}
           />
        )
    }
}

export default MessagesDropdownContainer;