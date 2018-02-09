import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { ContentUploader } from 'box-ui-elements';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import messages from 'box-ui-elements/i18n/en-US';
import 'box-ui-elements/dist/uploader.css';
import Footer from './footer.jsx';


addLocaleData(enLocaleData);

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false,
    };
  }

  render() {
    return(
        <div id='upload-component'>
          <h2 id='loan-application-step'>Upload your Loan Application Files</h2>
            <div id='box-upload'>

                  <ContentUploader
                      token='su9j2C9CEHYVrmGJ2mSZ8wZSWZw3l2wR'
                      language='en-US'
                      messages={messages}
                      name='loan_application_files'
                      rootFolderId='46276214925'
                      id='file-upload-input'/>
           </div>

          <img id='buttons' src='../assets/buttons.png'></img>
          <Footer />
        </div>
    );
  }
}

export default Uploader;
