import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploaded: false,
    };
  }

  uploadFiles() {
    let fileToUpload = document.getElementById('file-upload-input').files[0];
    let form = new FormData();

    form.append('file', fileToUpload);
    form.append('parent_id', '46276214925');
    $.ajax({
      url: 'https://upload.box.com/api/2.0/files/content',
      headers: {Authorization: 'Bearer whAQZkMeYzFkgQ3w5NubPTmLhL1aUGJY'},
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: form
    }).then((data) => {
       console.log(data.responseText);
    });

  }

  render() {
    return(
        <div id='upload-component'>
          <div id='box-upload'>
            <label>Upload your Loan Application Files
              <br/>
              <input
                     onChange={() => this.uploadFiles()}
                     type='file'
                     name='loan_application_files'
                     id='file-upload-input'/>
            </label>
          </div>
        </div>
    );
  }
}

export default Uploader;
