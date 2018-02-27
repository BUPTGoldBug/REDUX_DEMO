import * as types from '../actions/ActionTypes'

import { Navigator_ } from "../components/NavigationPage"
import {NavigationActions } from "react-navigation"
import * as constant from '../util/Constant'
const Original_Action =  Navigator_.router.getActionForPathAndParams(constant.route_pathName.userListPage);
const Original_State  =  Navigator_.router.getStateForAction(Original_Action);//用action和旧状态返回新状态，没有旧状态
const to_detailAction =  Navigator_.router.getActionForPathAndParams(constant.route_pathName.userDetailPage);
const to_detailAction_state=   Navigator_.router.getStateForAction(to_detailAction);
const init_state = {
       index:0,

       routes:[
            {key:"0",routeName:"userListPage",params:{}},
       ]
}
console.log("Original_State");
console.log(Original_State);

export  default   function NavigatorReducer (state = init_state, action = {}){
     console.log("action:");
     console.log(action);
    switch(action.type){
        case types.PUSH:{
            //压入,注意payload的数据,
            //1.创建跳转的action
            console.log("old push state");
            console.log(state);
            let pushAction =  NavigationActions.navigate({
                routeName:action.payload.key,
                params:action.payload.params
            });
            console.log("push action");
            console.log(pushAction);
            //2.获取新的状态
            let newState = Navigator_.router.getStateForAction(pushAction,state);
            console.log("new push state");
            console.log(newState);
            return newState ;
               
        }
        case types.POP:{
            //弹出，注意返回
            let backAction  = NavigationActions.back();
            let newState = Navigator_.router.getStateForAction(backAction,state);
            console.log("new pop state");
            console.log(newState);
            return newState;
        }
        case types.RESET:{
            //重置，到最开始的页面去
            let resetAction = NavigationActions.reset({
                actions:[Original_Action],
                index:0

            });
            return newState ;
        }
        default:{
            //什么都没有，应该原state
            console.log("default!!!!!!!!!")
            return state;
        }
    }


} 