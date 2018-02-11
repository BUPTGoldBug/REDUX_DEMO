
//一个异步请求的四个action ,发起-正在-成功/拒绝
//只用触发一个第一个type的action，其他两个action-type 由 redux-promise-middleware 进行触发
//其他两个后缀必须是_PENDING,_FUL
export const SEARCH_USER = 'SEARCH_USER' ;

export const SEARCH_USER_PENDING = 'SEARCH_USER_PENDING' ;

export const SEARCH_USER_FULFILLED = 'SEARCH_USER_FULFILLED' ;

export const SEARCH_USER_REJECTED = 'SEARCH_USER_REJECTED' ;


export const DETAIL_USER = 'DETAIL_USER';

export const DETAIL_USER_PENDING = 'DETAIL_USER_PENDING';

export const DETAIL_USER_FULFILLED = 'DETAIL_USER_FULFILLED';

export const DETAIL_USER_REJECTED = 'DETAIL_USER_REJECTED';

export const PUSH = "push";
export const POP = "pop";
export const RESET = "RESET";//登出的时候使用