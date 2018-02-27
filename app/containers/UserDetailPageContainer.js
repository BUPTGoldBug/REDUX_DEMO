'use stric'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserDetailPage from "../components/UserDetailPage"
import {checkUserDetail} from "../actions/SearchAction"
import {pop} from "../actions/NavigatorAction"
export default   connect(
    (state)=>{
        console.log("UserDetailPageContainer state");
        console.log(state);
        
        return (Object.assign({
        isDetailLoading:state.search.isDetailLoading,//取出来这个属性
        isDetailLoadFaild:state.search.isDetailLoadFaild,
        userDetail:state.search.userDetail 
    }));
},
    //这个页面需要action，以方便在页面调用
    (dispatch)=>{
         console.log("UserDetailPageContainer dispatch");
          console.log(dispatch);
        return (Object.assign({dispatch: dispatch}, {actions:bindActionCreators({pop,checkUserDetail}, dispatch)}))}
)(UserDetailPage);