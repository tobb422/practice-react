import React, { Component } from 'react';
import '../styles/pages/index.css';
import axios from 'axios';

export default class Index extends Component {
  async componentDidMount() {
    const tmp = await axios.get('https://www.googleapis.com/books/v1/volumes?q=React')
    console.log(tmp)
  }
  render() {
    return (
      <h1>テスト</h1>
    )
  }
}
