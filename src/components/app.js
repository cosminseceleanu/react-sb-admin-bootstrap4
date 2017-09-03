import React, { Component } from 'react';

import NavigationContainer from '../containers/navigation-container';
import Content from './content';

class App extends Component {
  render() {
    return (
        <div>
          <NavigationContainer/>
          <Content/>
        </div>
    );
  }
}

export default App;