import React, { Component } from 'react';
import axios from 'axios';
import NumberInput from 'react-number-input';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      prefixLen: 5,
      suffixLen: 1,
      numberOfSentences: 10,
    }
  }

  onChangeHandler=event=>{
    //console.log("event.target --->" + event.target);
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
      prefixLen: event.target.prefixLen,
    })
  }

  onClickHandler=()=>{
    const data = new FormData();
    data.append('file', this.state.selectedFile);
    data.append('prefixLen', this.state.prefixLen);
    data.append('suffixLen', this.state.suffixLen);
    data.append('numberOfSentences', this.state.numberOfSentences);
    axios.post("http://localhost:8080/upload", data, {}).then(res => {
      console.log(res.statusText)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img id="output" src={logo} className="App-logo" alt="logo" />
          <div className="container">
    	      <div className="row">
          	  <div className="offset-md-3 col-md-6">
                <label>Prefix Length</label>
                <NumberInput id="prefixLen" type="number" onChange={this.onChangeHandler} value={this.state.prefixLen} min={1} max={100} format="0" />
                <label>Suffix Length</label>
                <NumberInput id="suffixLen" type="number" value={this.state.suffixLen} min={1} max={10} format="0" />
                <label>Number of Sentences</label>
                <NumberInput id="numberOfSentences" type="number" value={this.state.numberOfSentences} min={1} max={1000} format="0" />
                <div className="form-group files">
                  <label>Upload Your File </label>
                  <input type="file" className="form-control" multiple="false" onChange={this.onChangeHandler}/>
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
