'use strict';
import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Card,
    Input,
    Item,
    List,
    CardItem,
    ListItem,
    Thumbnail
} from 'native-base';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { FlatList } from 'react-native'
import * as constant from '../util/Constant'
export default class UserListPage extends Component {
  
    constructor(props, context) {
        super(props, context);
        console.log("UserListPage props");
        console.log(props);
        this.renderPendingField = this.renderPendingField.bind(this);
        this.searchInputChange = this.searchInputChange.bind(this);
        this.renderUserList = this.renderUserList.bind(this);
    }
    render() {
        const { isListLoading, isListLoadFailed, userList } = this.props;
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon1 name="search" style={{ fontSize: 20 }} />
                        <Input placeholder="Search" onChangeText={this.searchInputChange} />
                        <Icon1 name="user" style={{ fontSize: 20 }} />
                    </Item>
                    <Button transparent>
                        <Text>搜索</Text>
                    </Button>
                </Header>
                <Content>
                    {
                        this.renderPendingField(isListLoading, isListLoadFailed, userList)

                    }
                </Content>
            </Container>


        );

    }

    renderPendingField(isListLoading, isListLoadFailed, userList) {
        //渲染
        if (isListLoading == true) {
            //正在加载
            return (<Icon1 name="spinner" style={{ fontSize: 20 }} />);


        } else if (isListLoading == false) {
            //不是在加载
            if (isListLoadFailed == true) {
                return <Text >加载失败</Text>;

            } else {
                if (userList.length > 0) {
                    //加载成功且不是空的
                    return <FlatList data={userList} renderItem={this.renderUserList} keyExtractor ={(item,index)=>(item.uid)} />

                } else {
                    //成功加载，但是是空的
                    return <Text>空</Text>;
                }

            }

        }

    }
    searchInputChange(txt) {
        //搜索
        //这个action是在相应的container里面传进来的
        this.props.actions.searchUser(txt);

    }

    /**
     * 
     * 
     * user是服务器传来的user对象
     * 服务器传过来是{userList:[
     *  {
     *      uid:,
     *      uname:,
     *      password:,
     *      position:,
     *      ....
     *  }
     * ]
     * 
     *  
     * }
     */
    renderUserList({ item }) {
        //渲染
        //action在onpress里面调用
        console.log("user");
       
        let user = item;
          console.log(user);
        return (<ListItem avatar onPress={() => {
            this.props.actions.push(constant.route_pathName.userDetailPage, { userName: user.uid })
        }
        }>
            <Left>
                <Thumbnail source={require('../resources/user_selected.png')} />
            </Left>
            <Body>
                <Text>{user.uname}</Text>
                <Text note>{user.position}</Text>
            </Body>
            <Right>
                <Text note>3:43 pm</Text>
            </Right>
        </ListItem>);

    }

}