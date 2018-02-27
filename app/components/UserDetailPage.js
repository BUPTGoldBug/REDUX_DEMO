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
                                this.renderField(UserDetailField.NAME_FIELD)
                            }
                        </ListItem>
                        <ListItem>
                            <Left><Text>身份:</Text></Left>
                            {
                                // () => { return ((isDetailLoading == true) ? <Body><Icon1 name="spinner" /></Body> : (isDetailLoadFaild == true) ? <Body><Text>加载失败</Text></Body> : <Body><Text>{userDetail.position}</Text></Body>) }
                                 this.renderField(UserDetailField.POSITION_FILED)
                            }
                        </ListItem>
                        <ListItem>
                            <Left><Text>密码:</Text></Left>
                            {
                                this.renderField(UserDetailField.PWD_FILED)
                                // () => { return ((isDetailLoading == true) ? <Body><Icon1 name="spinner" /></Body> : (isDetailLoadFaild == true) ? <Body><Text>加载失败</Text></Body> : <Body><Text>{userDetail.password}</Text></Body>) }
                            }
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }


    renderField(type) {
        const { isDetailLoading, isDetailLoadFaild, userDetail } = this.props;
        const { userName } = this.props.navigation.state.params;//取出userName
        let temp = null;
        if(type == UserDetailField.NAME_FIELD){
            temp = userDetail.uname;

        }else if(type == UserDetailField.POSITION_FILED){
            temp = userDetail.position;
        }else {
            temp = userDetail.password;
        }




        if (isDetailLoading) {
            return (<Body><Icon1 name="spinner" /></Body>);
        } else if (isDetailLoadFaild) {

            return (<Body><Text>加载失败</Text></Body>);
        } else {
            return (<Body><Text>{temp}</Text></Body>);
        }

    }

}
