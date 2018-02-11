'use strict'

import { StackNavigator,addNavigationHelpers} from 'react-navigation'; 
import { 
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener
} from 'react-navigation-redux-helpers';

import React ,{Component,PropTypes} from 'react';
import UserDetailPage from './UserDetailPage';
import UserListPage from './UserListPage';

export const routerConfig = {
    userDetailPage:{
        screen:UserListPage

    },
    userListPage:{
        screen:UserListPage
    }
};
export const navigator_midderware = createReactNavigationReduxMiddleware("root",state=>state.navigator);
export const Navigator_ = StackNavigator(routerConfig);
export const addedListener = createReduxBoundAddListener();

export default class AppNavigator extends Component {
    static propTyoes = {
        dispatch:PropTypes.func.isRequired,
        navigator:PropTypes.object.isRequired
    };
    render(){
        return(
            <Navigator_ navigation = {
                addNavigationHelpers({
                    dispatch:this.props.dispatch,
                    state:this.props.navigator
                })
            }>
            </Navigator_>
        )
    }
}