import * as types from '../actions/ActionTypes'
import * as constant from '../util/Constant'
import {push,pop} from './NavigatorAction'
export const searchUser = function (userName){
    //一旦发出searchUserAction,需要reducer 三个action pending,reject fulfilled
    let formData = new FormData();
    console.log("search!!")
    formData.append("userName",userName);
    return {
        type:types.SEARCH_USER,
        payload:fetch(constant.ROOT_SERVER_URL+constant.URL.getPeopleList,{
            method:'post',
            body:formData,
            headers: {'Cache-Control': 'no-cache',
                  
            }
        }).then(response => response.json())
    }
};

export const checkUserDetail = function (specUserName){
    //跳转到一个详情页面，注意，跳转都不是单纯的，都是有副作用的，需要先取数据，然后再路由跳转
    //或者先路由跳转，然后
 
        //这里返回我们的action
        console.log("checkUserDetail!!")
        let formData = new FormData();
        formData.append("userName",specUserName);
        return {
            type:types.DETAIL_USER,
            payload:fetch(
            constant.ROOT_SERVER_URL+constant.URL.getPeopleDetail,{
            method:'post',
            body:formData,
            headers: {'Cache-Control': 'no-cache',
  
            }
        }).then(response => response.json())
             }
    

}
