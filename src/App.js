import React, { Component } from 'react';
import axios from 'axios';
import NumericInput from 'react-numeric-input';
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

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPrefixChangeHandler = this.onPrefixChangeHandler.bind(this);
  }

  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler=()=>{
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    data.append('prefixLen', this.state.prefixLen);
    data.append('suffixLen', this.state.suffixLen);
    data.append('numberOfSentences', this.state.numberOfSentences);

    axios.post("http://localhost:8080/api/generate", data, {}).then(res => {
      this.setState({
        output: res.data,
      });
    })
  }

  onPrefixChangeHandler=event=>{
    console.log("onPrefixChangeHandler called" + event);
    this.setState({
      prefixLen: event,
    })
  }

  onSuffixChangeHandler=event=>{
    console.log("onSuffixChangeHandler called" + event);
    this.setState({
      suffixLen: event,
    })
  }

  onNumberOfSentencesChangeHandler=event=>{
    console.log("onSuffixChangeHandler called" + event);
    this.setState({
      numberOfSentences: event,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="output">{this.state.output}</div>
          <div className="container">
    	      <div className="row">
          	  <div className="offset-md-3 col-md-6">
                <label>Prefix Length</label>
                <NumericInput id="prefixLen" type="number" onChange={this.onPrefixChangeHandler} value={this.state.prefixLen} min={1} max={100} />
                <label>Suffix Length</label>
                <NumericInput id="suffixLen" type="number" onChange={this.onSuffixChangeHandler} value={this.state.suffixLen} min={1} max={10} />
                <label>Number of Sentences</label>
                <NumericInput id="numberOfSentences" type="number" onChange={this.onNumberOfSentencesChangeHandler} value={this.state.numberOfSentences} min={1} max={1000} />
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple={false} onChange={this.onChangeHandler}/>
                </div>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
    	        </div>
            </div>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
