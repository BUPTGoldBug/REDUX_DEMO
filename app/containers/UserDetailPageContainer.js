'use stric'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserDetailPage from "../components/UserDetailPage"
import {pop} from "../actions/NavigatorAction"
export default UserSearchContainer = connect(
    (state)=>({
        isDetailLoading:state.search.isDetailLoading,//取出来这个属性
        isDetailLoadFaild:state.search.isDetailLoadFaild,
        userDetail:state.search.userDetail 
    }),
    //这个页面需要action，以方便在页面调用
    (dispatch)=>(bindActionCreators({
        pop
    },dispatch))
)(UserDetailPage);