import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Image } from 'react-native';


// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

export default class BorrowerSuccess extends React.Component {
  
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',flex:1,backgroundColor:'#5cd7f0'}}> 
     
      <Text style={{fontSize:40,textAlign:'center',fontWeight:'bold',padding:10}}>{'Congrats!'}</Text>
       <Text style={{fontSize:18,textAlign:'center'}}>{'You were lent €500 by Satish!'}</Text>
      <Text>{'\n'}</Text>
      <Image style={{width: 380, height: 340}}  source={{uri: 'https://media.giphy.com/media/l41lJ8V74Q1dUfAjK/giphy.gif'}} />
       <Button 
        large
        rounded
        title='Thanks!'
        backgroundColor="#000" buttonStyle={{width:300,borderRadius:5,bottom:-50}}  onPress={() => this.props.navigation.navigate('Home')}/>
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
