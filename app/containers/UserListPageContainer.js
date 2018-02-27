'use stric'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserListPage from "../components/UserListPage"
import {searchUser,checkUserDetail} from "../actions/SearchAction"
import{ push } from '../actions/NavigatorAction'
export default connect(
    (state)=>{
        console.log("UserListPageContainer state")
        console.log(state);
       return  Object.assign({
        isListLoading:state.search.isListLoading,//取出来这个属性
        isListLoadFailed:state.search.isListLoadFailed,//
        userList:state.search.userList 
    })},
    (dispatch)=>{
        console.log("UserListPage dispatch")
        console.log(dispatch);
        return (Object.assign({dispatch:dispatch}, {actions:bindActionCreators({searchUser,checkUserDetail,push}, dispatch)})) ;
    }  
)(UserListPage);