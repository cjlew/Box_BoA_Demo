import React from 'react';
import Uploader from './uploader.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="loan-application-container">
        <Uploader />
      </div>
    );
  }
}

export default App;
