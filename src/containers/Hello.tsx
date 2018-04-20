import Hello from '../components/Hello';
import * as actions from '../actions/helloaction';
// import { StoreState } from '../store/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(state:any) {
  return {
    enthusiasmLevel: state.enthusiasm.enthusiasmLevel||1,
    name: state.enthusiasm.languageName|| "world" ,
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);