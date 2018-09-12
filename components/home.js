import * as React from 'react';
import { Image, View } from 'react-native';

import styles from '../assets/css/style'

// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'


export default class Home extends React.Component {
  
  render() {
    return (
      <View style={styles.imageContainer}>     
         <Image style={styles.image} source={require("../assets/images/home.jpeg")}/>
      </View>
    );
  }
}
