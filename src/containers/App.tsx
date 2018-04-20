import App from '../components/App';
import * as actions from '../actions/appaction';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(state: any) {
    return {
      name: state.numbers.name|| "world", 
      counter:state.numbers.counter||0
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.NumbersAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementNumbers()),
    onDecrement: () => dispatch(actions.decrementNumbers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);