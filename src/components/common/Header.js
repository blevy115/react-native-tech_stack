// Import Library for making Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;


  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
};
//Make component availbale to other parts of app

export { Header };
