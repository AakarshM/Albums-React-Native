//import libraries for making a Component
import React from 'react';
import { View, Text } from 'react-native';

//make a Component
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

//styles stuff

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical align
    alignItems: 'center',  //horizontal align
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.27,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }

};

//make component available to other parts of App

export default Header;
