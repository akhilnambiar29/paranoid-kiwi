import * as React from 'react';
import { Text, View, Alert } from 'react-native';

import styles from '../assets/css/style';

// or any pure javascript modules available in npm
import { Button, Avatar } from 'react-native-elements'


export default class Borrower extends React.Component {

  approveLoan = function() {    
    this.props.navigation.navigate('LoanApproved');
  };
  
  render() {
    return (
      <View style={styles.container}>     
        <Text style={styles.title}>
          bunqLE 
        </Text>
        <View style={styles.centerNF}>          
          <Avatar xlarge rounded source={{uri: "https://avatars3.githubusercontent.com/u/29310969?s=400&v=4"}}  onPress={() => console.log("Works!")}  
                  activeOpacity={0.7}/>
        </View>
        
        <Text style={styles.paragraphNM}>
        </Text>
         <Text style={styles.paragraphNM}>
          You will borrow 
        </Text>
        <Text style={styles.paragraphNM}>
          €500,00 for 5 months from Satish
        </Text>        
        <Text style={styles.paragraphNM}>
          You will give 
        </Text>     
        <Text style={styles.paragraphNM}>
          Total €550,00 = €110,00 x 5 each month
        </Text>        
        <Text style={styles.paragraphNM}>
         
        </Text>
        
        <Text style={styles.paragraphNM}>
        </Text>
        
        
        
        <Text style={styles.paragraphNM}>
        </Text>
        <Button large rounded title='Lets move ahead!' backgroundColor="#000" onPress={() => this.props.navigation.navigate('TermsndCond')} ></Button>
        <Button large rounded title='Nope!' backgroundColor="#fff" color="#000"onPress={() => this.props.navigation.navigate('Home')} >
        </Button>
      </View>
    );
  }
}
