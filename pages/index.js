import React, { Component } from 'react';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import Layout from '../components/layouts/main'
// import '../styles/pages/index.css';

import Book from '../components/book';

class Index extends Component {
  constructor(props) {
    super(props)
    this.inputText = this.inputText.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  static async getInitialProps() {}

  // event 系
  inputText(e) {
    this.props.actions.setQuery(e.target.value)
  }

  onSubmit() {
    this.props.actions.asyncSearchBooks()
  }

  // render 系
  renderBookList() {
    const { state } = this.props
    return state.books.map(book => <Book key={book.id} book={book}/>)
  }

  renderContent() {
    const { state } = this.props
    return (
      <main>
        <h1>本検索</h1>
        <div className="search">
          書籍名：<input type="text" value={state.query} onChange={this.inputText} />
          <input type="submit" onClick={this.onSubmit} />
        </div>
        <div className="wrapper">
          {this.renderBookList()}
        </div>
      </main>
    )
  }

  render() {
    return <Layout content={this.renderContent()}/>
  }
}

const mapStateToProps = state => {
  const { index } = state;
  return {
    state: index,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      asyncSearchBooks: _ => dispatch(actions.asyncSearchBooks()),
      setQuery: query => dispatch(actions.setQuery(query))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index))
