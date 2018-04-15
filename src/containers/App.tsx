import App, { AppProps } from '../components/App';
import * as actions from '../actions/';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps( ownProps: AppProps):AppProps {
    
    return { ...ownProps };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);