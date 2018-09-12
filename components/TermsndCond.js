import * as React from 'react';
import { Text, View, Alert } from 'react-native';

import styles from '../assets/css/style'

// or any pure javascript modules available in npm
import { Button, Avatar, CheckBox } from 'react-native-elements'


export default class TermsndCond extends React.Component {

  approveLoan = function() {    
    this.props.navigation.navigate('LendSuccess');
  };

  constructor(props) {
    super(props);
    this.state = {checked: false};


  }
  
  render() {
    return (
      <View style={styles.container}>     
        <Text style={styles.title}>
          bunqLE 
        </Text>
        <View style={styles.centerNF}>          
          <Avatar xlarge rounded source={{uri: "https://www.ventishop.eu/image/data/products/bunq.png"}} activeOpacity={0.7}/>
        </View>
        
        <Text style={styles.paragraphNM}>
        </Text>
         <Text style={styles.subTitle}>
          Terms & Conditions
        </Text>   
        <Text style={styles.paragraphNM}>
           Please accept below terms & conditions to proceed.
        </Text>     
        <Text style={styles.paragraphNM}>
          
        </Text>        
        <Text style={styles.paragraphNM}>
         <CheckBox center title='I have read and understood bunqLe TnC.' checked={this.state.checked} onPress={() =>  this.setState(previousState => {
        return { checked: !previousState.checked };
      })}/>
        </Text>
        
                
        <Text style={styles.paragraphNM}>
        </Text>
        <Button large rounded title='Accept' backgroundColor="#000" onPress={() => this.props.navigation.navigate('BorrowerWait')} ></Button>
        <Button large rounded title='Reject!' backgroundColor="#fff" color="#000"onPress={() => this.props.navigation.navigate('Home')} >
        </Button>
      </View>
    );
  }
}
