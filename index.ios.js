//index iosjs, place code here for ios.

//import a library to help create a Component
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import { Container, Header, Title, Content, Footer,
  FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

class HelloWorldApp extends Component {
  render() {
    return (
      <Container>
               <Header>
                   <Left>
                       <Button transparent>
                           <Icon name='menu' />
                       </Button>
                   </Left>
                   <Body>
                       <Title>Header</Title>
                   </Body>
                   <Right />
               </Header>

               <Content>
                   <Text>CONTENT </Text>
               </Content>

               <Footer>
                   <FooterTab>
                       <Button full>
                           <Text>Footer</Text>
                       </Button>
                   </FooterTab>
               </Footer>
           </Container>
    );
  }
}

AppRegistry.registerComponent('albums', () => HelloWorldApp);
//Useful links:
//WEBPAGE FOR ALBUM DETAIL:  http://rallycoding.herokuapp.com/api/music_albums
