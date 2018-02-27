import * as types from '../actions/ActionTypes'


const initialState = {
    isDetailLoading:false,//是否详情正在加载
    isDetailLoadFaild:false,//是否详情加载失败
    userDetail:"",//详情文本 
    isListLoading:false,//是否列表正在
    isListLoadFailed:false,//列表加载失败
    userList:[] //空数组

};
export  default   function SearchReducer (state = initialState, action = {}){
   
       switch(action.type){
            case types.SEARCH_USER_PENDING :{
                //正在加载
                let newState = {
                    ...state,
                    //正在加载应该是哪些属性的值变成哪些
                    isListLoading:true,
                    isListLoadFailed:false,//还没有失败
                };
                return newState
            }
            case types.SEARCH_USER_FULFILLED:{
                //成功加载
                   let newState = {
                    ...state,
                    isListLoading:false,
                    isListLoadFailed:false,
                    userList:action.payload.userList,//还没有失败
                };
                  return newState
            }
            case types.SEARCH_USER_REJECTED:{
                   //加载失败
                   let newState = {
                    ...state,
                    isListLoading:false,
                    isListLoadFailed:true,
                    userList:[],//还没有失败
                };
                  return newState
            }
            case types.DETAIL_USER_PENDING :{
                   //正在加载
                let newState = {
                    ...state,
                    //正在加载应该是哪些属性的值变成哪些
                    isDetailLoading:true,
                    isDetailLoadFaild:false,//还没有失败
                };
                return newState

            }
            case types.DETAIL_USER_FULFILLED:{
                    //成功加载
                console.log(action.payload);
                   let newState = {
                    ...state,
                    isDetailLoading:false,
                    isDetailLoadFaild:false,
                    userDetail:action.payload,
                    //从字段取的
                };
                  return newState
            }
            case types.DETAIL_USER_REJECTED:{
                //加载失败
                   let newState = {
                    ...state,
                    isDetailLoading:false,
                    isDetailLoadFaild:true,
                    userDetail:{},
                };
                  return newState
            }
            default:{
                return state;                
            }
       }
} 