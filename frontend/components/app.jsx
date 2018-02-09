import React from 'react';
import Uploader from './uploader.jsx';
import StaticComponents from './static_components.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="loan-application-container">
        <StaticComponents />
        <Uploader />
      </div>
    );
  }
}

export default App;
