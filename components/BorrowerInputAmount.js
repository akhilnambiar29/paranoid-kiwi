import * as React from 'react';
import { Text, View, StyleSheet,TextInput,ActivityIndicator,FlatList,Alert,Keyboard,ScrollView ,KeyboardAvoidingView} from 'react-native';



// or any pure javascript modules available in npm
import { Button } from 'react-native-elements'

export default class BorrowerInputAmount extends React.Component {
  
  constructor(props){
    super(props);

    this.state ={ isLoading: true}
  }

  render() {

    

    return (
      <KeyboardAvoidingView behavior="padding"
>
      <View style={{alignItems:'center' , backgroundColor:'#e5eff1'}}>      
        <Text style={styles.title}>
           
        </Text>
        <Text>{`\n\n`}</Text> 
        <Text style={styles.title}>How many € you would like to borrow?
        </Text>
           <TextInput
        style={{height: 40,width: 300, borderColor: 'gray', borderWidth: 1 ,textAlign:'center'}}
        keyboardType='numeric'
      />
  
  <Text>{`\n\n`}</Text>
 
      
 
      
        <Button 
        
        title='Next'
        backgroundColor="#3f51b5" buttonStyle={{width:300,borderRadius:5,bottom:-50}} onPress={() => this.props.navigation.navigate('BorrowerInputDuration')} >
        </Button>
      </View>
      </KeyboardAvoidingView>
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
