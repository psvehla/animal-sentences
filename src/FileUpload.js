import React, { Component } from 'react';
import './FileUpload.css';

class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="form-group files">
          <label id="upload-label">Upload Your File </label>
          <input type="file" className="form-control" multiple={false} onChange={this.props.onChange}/>
        </div>
        <button type="button" className="btn btn-success btn-block" onClick={this.props.onClick}>Upload</button>
      </div>
    );
  }
}

export default FileUpload;
