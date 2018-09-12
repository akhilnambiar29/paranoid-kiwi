import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Image } from 'react-native';


// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

export default class BorrowerWait extends React.Component {
  
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center',flex:1,backgroundColor:'#e5eff1'}}> 
      <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',padding:20}}>You are almost there!</Text> 
          <Image
          style={{width: 300, height: 300}}
          source={{uri: 'https://i.gifer.com/1amw.gif'}} />
      </View>
    );
  }

   componentDidMount(){
         // Start counting when the page is loaded
         this.timeoutHandle = setTimeout(()=>{
              this.props.navigation.navigate('BorrowerSuccess');
         }, 3000);
    }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
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
