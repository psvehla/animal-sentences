import React, { Component } from 'react';
import axios from 'axios';
import './FileUpload.css';

class FileUpload extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  // checkMimeType=(event)=>{
  //
  //   let file = event.target.files[0];
  //
  //   if (file && file.type !== 'text/plain') {
  //     this.setState({
  //       output: "Only plain text files are supported.",
  //     })
  //
  //     return false;
  //   }
  //
  //   return true;
  // }
  //
  // checkFileSize=(event)=>{
  //
  //   let file = event.target.files[0];
  //
  //   if (file && file.size > 1048576 ) {
  //     this.setState({
  //       output: "Your file is too big, please try another one.",
  //     })
  //
  //     return false;
  //   }
  //
  //   return true;
  // }
  //
  // onChangeHandler=event=>{
  //   if (this.checkMimeType(event) && this.checkFileSize(event)) {
  //     this.setState({
  //       selectedFile: event.target.files[0],
  //       loaded: 0,
  //     })
  //   }
  // }

  // onClickHandler=()=>{
  //   const data = new FormData();
  //   data.append('file', this.state.selectedFile);
  //   data.append('prefixLen', this.state.prefixLen);
  //   data.append('suffixLen', this.state.suffixLen);
  //   data.append('numberOfSentences', this.state.numberOfSentences);
  //
  //   axios.post(process.env.REACT_APP_SENTENCE_SERVICE_ENDPOINT, data, {})
  //     .then(res => {
  //       this.setState({
  //         output: res.data,
  //       });
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         this.setState({
  //           output: "Your file is invalid. Please upload a plain text one.",
  //         })
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       }
  //       else if (error.request) {
  //         console.log(error.request);
  //       }
  //       else {
  //         console.log('Error', error.message);
  //       }
  //       console.log(error.config);
  //     });
  // }

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
