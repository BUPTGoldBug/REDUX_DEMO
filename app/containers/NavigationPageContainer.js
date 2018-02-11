'use stric'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppNavigator from '../components/NavigationPage'
import {pop,push,reset} from "../actions/NavigatorAction"



export default  NavigationContainer = connect(
    (state)=>({
        navigator:state.navigator
    }),    
    (dispatch) => (bindActionCreators({
        push,
        pop,
        reset
    }, dispatch))
)(AppNavigator);