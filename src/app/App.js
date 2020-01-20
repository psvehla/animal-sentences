import React, { Component } from 'react';
import axios from 'axios';
import NumericInput from 'react-numeric-input';
import FileUpload from '../file-upload/FileUpload';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      prefixLen: 5,
      suffixLen: 1,
      numberOfSentences: 10,
      output: "Please upload some plain text.",
    }
  }

  checkMimeType=(event)=>{

    let file = event.target.files[0];

    if (file && file.type !== 'text/plain') {
      this.setState({
        output: "Only plain text files are supported.",
      })

      return false;
    }

    return true;
  }

  checkFileSize=(event)=>{

    let file = event.target.files[0];

    if (file && file.size > 1048576 ) {
      this.setState({
        output: "Your file is too big, please try another one.",
      })

      return false;
    }

    return true;
  }

  onChangeHandler=event=>{
    if (this.checkMimeType(event) && this.checkFileSize(event)) {
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    }
  }

  onClickHandler=()=>{
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    data.append('prefixLen', this.state.prefixLen);
    data.append('suffixLen', this.state.suffixLen);
    data.append('numberOfSentences', this.state.numberOfSentences);

    axios.post(process.env.REACT_APP_SENTENCE_SERVICE_ENDPOINT, data, {})
      .then(res => {
        this.setState({
          output: res.data,
        });
      })
      .catch((error) => {
        if (error.response) {
          this.setState({
            output: "Your file is invalid. Please upload a plain text one.",
          })
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        }
        else if (error.request) {
          console.error(error.request);
        }
        else {
          console.error('Error', error.message);
        }
        console.error(error.config);
      });
  }

  onPrefixChangeHandler=event=>{
    this.setState({
      prefixLen: event,
    })
  }

  onSuffixChangeHandler=event=>{
    this.setState({
      suffixLen: event,
    })
  }

  onNumberOfSentencesChangeHandler=event=>{
    this.setState({
      numberOfSentences: event,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sentence Generator</h1>
          <p>
            This application generates sentences based on the provided text. It uses a Markov chain algorithm, you can adjust the prefix and suffix size of the algorithm, though reasonable
            defaults have been chosen for you. Feel free to experiment!
          </p>
          <div id="output">{this.state.output}</div>
          <div className="container">
    	      <div className="row">
          	  <div className="offset-md-3 col-md-6">
                <label>Prefix Length</label>

                <NumericInput id="prefixLen" style={{
                  input: {
                    width: 200
                  }
                }} type="number" onChange={this.onPrefixChangeHandler} value={this.state.prefixLen} min={1} max={100} />

              </div>
            </div>
            <div className="row">
          	  <div className="offset-md-3 col-md-6">
                <label>Suffix Length</label>

                <NumericInput id="suffixLen" style={{
                  input: {
                    width: 200,
                  }
                }} type="number" onChange={this.onSuffixChangeHandler} value={this.state.suffixLen} min={1} max={10} />

              </div>
            </div>
            <div className="row">
          	  <div className="offset-md-3 col-md-6">
                <label>Number of Sentences</label>
              </div>
            </div>
            <div className="row" style={{marginBottom: '35px'}}>
          	  <div className="offset-md-3 col-md-6">
                <NumericInput id="numberOfSentences" style={{
                  input: {
                    width: 200,
                  }
                }} type="number" onChange={this.onNumberOfSentencesChangeHandler} value={this.state.numberOfSentences} min={1} max={1000} />
              </div>
            </div>
            <div className="row">
              <div className="offset-md-3 col-md-6">
                <FileUpload onChange={this.onChangeHandler} onClick={this.onClickHandler} />
    	        </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
