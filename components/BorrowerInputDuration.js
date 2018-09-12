import * as React from 'react';
import { Text, View, StyleSheet,TextInput,Modal,ScrollView } from 'react-native';


// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

export default class BorrowerInputDuration extends React.Component {
  
  render() {
    return (
       <ScrollView contentContainerStyle={{flexGrow: 1}}
  keyboardShouldPersistTaps='handled'
>
      <View style={{alignItems:'center' , backgroundColor:'#e5eff1'}}>      
        <Text style={styles.title}>
           
        </Text>
        <Text>{`\n\n`}</Text> 
        <Text style={styles.title}>For how many months would you like to borrow ?
        </Text> 
           <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1 , width:300 , textAlign:'center'}}
        keyboardType='numeric'
      />

       <Text>{`\n\n`}</Text>
        <Button 
        
        title='Next!'
        backgroundColor="#3f51b5" buttonStyle={{width:300,borderRadius:5,bottom:0}} onPress={() => this.props.navigation.navigate('Lend')} >
        </Button>
      </View>
      </ScrollView>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign:'center'
  },  
  margin: {
    flex: 1,
  },
});
