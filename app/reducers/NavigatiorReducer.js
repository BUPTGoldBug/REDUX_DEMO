import * as types from '../actions/ActionTypes'

import { Navigator_ } from "../components/NavigationPage"
import {NavigationActions } from "react-navigation"
const initialState = {
    userNums:0
}
const Original_Action =  NavigationActions.navigate({
    routeName:"userListPage",
    params:{}
});
const Original_State  =  Navigator_.router.getStateForAction(Original_Action);//用action和旧状态返回新状态，没有旧状态


export  default   function NavigatorReducer (state = initialState, action = {}){
    switch(action.type){
        case types.PUSH:{
            //压入,注意payload的数据,
            //1.创建跳转的action
            let pushAction =  NavigationActions.navigate({
                routeName:action.payload.key,
                params:action.payload.params
            });
            //2.获取新的状态
            let newState = Navigator_.router.getStateForAction(pushAction,state);
            return newState || state;
               
        }
        case types.POP:{
            //弹出，注意返回
            let backAction  = NavigationActions.back();
            let newState = Navigator_.router.getStateForAction(backAction,state);
            return newState || state;
        }
        case types.RESET:{
            //重置，到最开始的页面去
            let resetAction = NavigationActions.reset({
                actions:[Original_Action],
                index:0

            });
            return newState || state;
        }
        default:{
            //什么都没有，应该原state
            return state;
        }
    }


} 