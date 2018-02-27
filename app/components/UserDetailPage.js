/**
 * Created by llf,2018/2/10
 */
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
    List,
    Right,
    Body,
    Icon,
    Text,
    Card,
    CardItem,
    ListItem
} from 'native-base';
import Icon1 from 'react-native-vector-icons/FontAwesome'
import { UserDetailField } from "../util/Constant"

export default class UserDetailPage extends Component {

    constructor(props, context) {
        super(props, context);
        console.log(" UserDetailPage props");
        console.log(props);

        this.renderField = this.renderField.bind(this);
    }

    componentWillMount() {
        console.log("this.props.navigation:")
        console.log(this.props.navigation)
        this.props.actions.checkUserDetail(this.props.navigation.state.params.userName);


    }
    render() {
        const { isDetailLoading, isDetailLoadFaild, userDetail } = this.props;
        const { userName } = this.props.navigation.state.params;//取出userName
        console.log("this.props:");
        console.log(this.props);
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => {
                            //调用返回函数
                            this.props.actions.pop();
                        }}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>返回</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Left><Text>id:</Text></Left>
                            <Body><Text>{userName}</Text></Body>
                        </ListItem>
                        <ListItem>
                            <Left><Text>姓名:</Text></Left>
                            {
                               // () => { return ((isDetailLoading == true) ? <Body><Icon1 name="spinner" /></Body> : (isDetailLoadFaild == true) ? <Body><Text>加载失败</Text></Body> : <Body><Text>{userDetail.uname}</Text></Body>) }
                               ()=>{
                                   console.log("userDetail.uname:"+userDetail.uname);
                                   if(isDetailLoading){
                                        return (<Icon1 name="spinner" />);
                                   }else if(isDetailLoadFaild){

                                       return ( <Text>加载失败</Text>);
                                   }else {
                                       return (<Text>{userDetail.uname}</Text>);
                                   }
                                 
                               }
                            }
                        </ListItem>
                        <ListItem>
                            <Left><Text>身份:</Text></Left>
                            {
                               // () => { return ((isDetailLoading == true) ? <Body><Icon1 name="spinner" /></Body> : (isDetailLoadFaild == true) ? <Body><Text>加载失败</Text></Body> : <Body><Text>{userDetail.position}</Text></Body>) }
                            }
                        </ListItem>
                        <ListItem>
                            <Left><Text>密码:</Text></Left>
                            {
                               // () => { return ((isDetailLoading == true) ? <Body><Icon1 name="spinner" /></Body> : (isDetailLoadFaild == true) ? <Body><Text>加载失败</Text></Body> : <Body><Text>{userDetail.password}</Text></Body>) }
                            }
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

    renderField(type) {
        //用来判断名字是否出现，如果没有出现，就显示圆圈
        const { isDetailLoading, isDetailLoadFaild, userDetail } = this.props;
        const { userName } = this.props.navigation.state.params;//取出userName
        let element = null;
        //细节
        if (isDetailLoading == true) {
            element = (<Icon1 name="spinner" />)
        } else if (isDetailLoadFaild == false) {

            element = (<Icon1 name="spinner" />)

        } else {
            return (
                <Body><Text>加载失败</Text></Body>
            );
        }



    }

}
