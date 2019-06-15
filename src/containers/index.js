import { connect } from 'react-redux';
import * as actions from '../store/actions';
import Index from '../pages';

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

export default connect(mapStateToProps, mapDispatchToProps)(Index)
