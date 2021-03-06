'use strict'

import { StackNavigator,addNavigationHelpers} from 'react-navigation'; 
import { 
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers';


import React, {Component} from 'react';
 import PropTypes from 'prop-types';
import UserDetailPage from '../containers/UserDetailPageContainer';
import UserListPage from '../containers/UserListPageContainer';

export const routerConfig = {
    userDetailPage:{
        screen:UserDetailPage,
        navigationOptions:(navigation)=>({
            header:null
        })
    },
    userListPage:{
        screen:UserListPage,
        navigationOptions:(navigation)=>({
            header:null
        })
    }
};
export const Navigator_ = StackNavigator(routerConfig);
export const navigator_midderware = createReactNavigationReduxMiddleware("root",state=>state.navigator);
export const addListener = createReduxBoundAddListener("root");

export default class AppNavigator extends Component {
      static propTypes = {
            dispatch:PropTypes.func.isRequired,
            navigator:PropTypes.object.isRequired
    };
      constructor(props, context) {
        console.log("AppNavigator props");
        console.log(props);
        super(props, context);
      
    }
    render(){
        return(
            <Navigator_ navigation = {
                addNavigationHelpers({
                    dispatch:this.props.dispatch,
                    state:this.props.navigator,
                    addListener
                })
            }>
            </Navigator_>
        )
    }
}