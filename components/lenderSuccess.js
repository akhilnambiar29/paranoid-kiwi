import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

export default class LenderSuccess extends React.Component {
  
  render() {
    return (
      <View>      
        <Text style={styles.title}>
          Lend 
        </Text>
        <Text style={styles.margin}>
        </Text>
         <Text style={styles.paragraph}>
          You have been registered.
        </Text>
        <Button 
        large
        rounded
        title='Okay!'
        backgroundColor="#000" >
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
