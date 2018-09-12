import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Constants } from 'expo';

// You can import from local files
import Link from './link';

// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

export default class Lender extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.title}>
          bunqLe 
        </Text>
        <Text style={styles.margin}>
        </Text>
         <Text style={styles.paragraph}>
          Need financial support? bunqers got your back!
        </Text>
        <Button 
        large
        rounded
        title='I Love bunqers!'
        backgroundColor="#3f51b5" buttonStyle={{width:300,borderRadius:5}}
         onPress={() => this.props.navigation.navigate('BorrowerInputAmount')
         } >
        </Button>
          <Button 
        large
        rounded
        title='No Thanks!'
        backgroundColor="#e5eff1"
        color="#000">
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#e5eff1'
  },
  paragraph: {
    margin: 24,
    marginBottom: 350,
    fontSize: 18,
    fontWeight: '',
    textAlign: 'center',
    color: '#34495e', 
  },
  title: {
    margin: 24,
    marginTop: 30,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },  
  margin: {
    flex: 1,
  },
});
