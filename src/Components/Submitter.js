import React, { Component } from 'react';
import axios from 'axios';

class Submitter extends Component {
  constructor(props) {
      super(props);
      this.state = {
          submitterName:'',
      title: '',datePublished:''
        }
      }
      handleChange = (event) =>{
          this.setState({[event.target.name]:event.target.value});
      }
  }
