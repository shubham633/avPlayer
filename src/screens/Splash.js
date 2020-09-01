import React, { Component } from 'react';
import { View,ImageBackground,StyleSheet } from 'react-native';

export default class Splash extends Component {
  constructor(props)
  {
    super(props);
    setTimeout(()=>
    {
      this.props.navigation.navigate("MediaPlayer");
    },2000);
  }

  render() {
    return (
      <ImageBackground style={styles.container} source={require('../assets/image/coverArt.jpg')}/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});

