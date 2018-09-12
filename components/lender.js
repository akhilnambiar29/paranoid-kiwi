import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

import { Constants } from 'expo';

export default class Borrower extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>     
        <Text style={styles.title}>
          Lend 
        </Text>
        <Text style={styles.margin}>
        </Text>
         <Text style={styles.paragraph}>
          Want to make money from your savings?
        </Text>
        <Button 
        large
        rounded
        title='Yes, make me rich!'
        backgroundColor="#000"
        onPress={() => this.props.navigation.navigate('LenderSuccess')}  >
        </Button>
               <Button 
        large
        rounded
        title='No Thanks!'
        backgroundColor="#fff"
        color="#000"
        onPress={() => this.props.navigation.navigate('LenderSuccess')} >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
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
