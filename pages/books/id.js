import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

import Layout from '../../components/layouts/main'
import '../../styles/pages/index.scss';

class Book extends Component {
  renderContent() {
    const { state } = this.props
    console.log(this.props)
    const book = state.books.find(book => book.id === 'SuFLDwAAQBAJ')
    if (!book) {
      return null
    }
    return (
      <main>
        <div className="wrapper">
          <Book key={book.id} book={book}/>
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

export default withRouter(connect(mapStateToProps)(Book))
