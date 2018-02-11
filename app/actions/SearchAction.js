import * as types from '../actions/ActionTypes'
import * as constant from '../util/Constant'
import {push,pop} from './NavigatorAction'
export const searchUser = function (userName){
    //一旦发出searchUserAction,需要reducer 三个action pending,reject fulfilled
    return {
        type:types.SEARCH_USER,
        payload:fetch(constant.ROOT_SERVER_URL+constant.URL.getPeopleList,{
            method:'post',
            body:JSON.stringify({
                userName:userName
            }),
            headers: {'Cache-Control': 'no-cache',
                    'Content-Type':'application/json'
            }
        }).then(response => response.json())
    }
};

export const checkUserDetail = function (specUserName){
    //跳转到一个详情页面，注意，跳转都不是单纯的，都是有副作用的，需要先取数据，然后再路由跳转
    //或者先路由跳转，然后
    dispatch(push(constant.route_pathName.userDetailPage,specUserName));
    return (dispatch,getState) =>{
        //这里返回我们的action
           return {
            type:types.DETAIL_USER,
            payload:fetch(constant.ROOT_SERVER_URL+constant.URL.getPeopleDetail,{
            method:'post',
            body:JSON.stringify({
                userName:userName
            }),
            headers: {'Cache-Control': 'no-cache',
                    'Content-Type':'application/json'
            }
        }).then(response => response.json())
             }


    };

}
