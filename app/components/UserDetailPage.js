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
    Right, 
    Body, 
    Icon, 
    Text,
    Card,
    CardItem
} from 'native-base';
import { UserDetailField } from "../util/Constant"

export default class UserDetailPage extends Component {
    constructor(props,context){
        super(props,context);
    }

  render() {
    
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress = { ()=>{
                    //调用返回函数
                    
                }}>
              <Icon name='left-arrowr' />
            </Button>
          </Left>
          <Body>
            <Title>返回</Title>
          </Body>
          <Right />
        </Header>
        <Content>
         <Card>
            <CardItem header>
                <Left>姓名：</Left>
                {
                   
                    this.renderNameField(UserDetailField.NAME_FIELD) // 这里用来有姓名和没有姓名的时候的区别

                }
            </CardItem>
            <CardItem>
             {
                   
                    this.renderNameField(UserDetailField.DETAILE_FIELD) // 

             }
            </CardItem>
        </Card>
        </Content>
      </Container>
    );
  }

 renderField(type){
    //用来判断名字是否出现，如果没有出现，就显示圆圈
  const { isDetailLoading, isDetailLoadFaild,  userDetail }  = this.props;
  const {userName } = this.props.navigation.state.params;//取出userName
  if(type == UserDetailField.NAME_FIELD){
    //名字
     return (
            <Body><Text>{userName}</Text></Body>
        );
  }else if(type == UserDetailField.DETAILE_FIELD){
  //细节
    if(isDetailLoading == true){
        return (
            <Body><Icon name="loading" /></Body>
        );
    }else if(isDetailLoadFaild == false ){
        return (
            <Body><Text>{userDetail}</Text></Body>
        );
    }else {
        return (
                <Body><Text>加载失败</Text></Body>
            );
        }
  }else {
    return null;

  }


}

}
