import React, { Component } from 'react';

import Header from './Header'
import MemeGenerator from './MemeGenerator'
import style from './style.css'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    )
}
}

export default App;
