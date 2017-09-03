import React, {Component} from 'react';


import Navigation from '../components/navigation';


export default class NavigationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navigation isOpen={this.state.isOpen} toogleNavbar={this.toggleNavbar.bind(this)}/>
        )
    }
}