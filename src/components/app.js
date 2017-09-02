import React, { Component } from 'react';

import Navigation from './navigation';
import Content from './content';

class App extends Component {
  render() {
    return (
        <div>
          <Navigation/>
          <Content/>
        </div>
    );
  }
}

export default App;