'use stric'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserListPage from "../components/UserListPage"
import {searchUser,checkUserDetail} from "../actions/SearchAction"
export default UserSearchContainer = connect(
    (state)=>({
        isListLoading:state.search.isListLoading,//取出来这个属性
        isListLoadFailed:state.search.isListLoadFailed,//
        userList:state.search.userList 
    }),
    (dispatch)=>(
        //这个页面需要的action
        bindActionCreators(
            {
                searchUser,
                checkUserDetail
            },dispatch)
    )   
)(UserListPage);