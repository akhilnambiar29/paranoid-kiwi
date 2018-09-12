import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import {Font} from 'expo'

// You can import from local files
import Lender from './components/lender';
import Borrower from './components/borrower';
import LenderSuccess from './components/lenderSuccess';
import BorrowerInputAmount from './components/BorrowerInputAmount';
import BorrowerInputDuration from './components/BorrowerInputDuration';
import BorrowerWait from './components/BorrowerWait';
import BorrowerSuccess from './components/BorrowerSuccess'
import TermsndCond from './components/TermsndCond'
import Home from './components/home'
import Lend from './components/lend'

const RootStack = StackNavigator(
  {
    Lender: {
      screen: Lender,
      navigationOptions: {
         header: null //this will hide the header
      },
    },
    Lend: {
      screen: Lend,
      navigationOptions: {
         header: null //this will hide the header
      },
    },
    Borrower: {
      screen: Borrower,
      navigationOptions: {
         header: null //this will hide the header
      },
    },
    LenderSuccess: {
      screen: LenderSuccess,
      navigationOptions: {
         header: null //this will hide the header
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
         header: null //this will hide the header
      },
    },
    BorrowerWait: {
      screen: BorrowerWait,
      navigationOptions: {
         header: null //this will hide the header 
      },
    },
    BorrowerInputAmount: {
      screen: BorrowerInputAmount,
      navigationOptions: {
         header: null //this will hide the header 
      },
    },
    BorrowerInputDuration: {
      screen: BorrowerInputDuration,
      navigationOptions: {
         header: null //this will hide the header 
      },
    },
    TermsndCond: {
      screen: TermsndCond,
      navigationOptions: {
         header: null //this will hide the header 
      },
    },
    BorrowerSuccess: {
      screen: BorrowerSuccess,
      navigationOptions: {
         header: null //this will hide the header 
      },
    },
  },
  {
    initialRouteName: 'Borrower',
  });

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
  componentDidMount() {
    Font.loadAsync({
      'julius-sans': require('./assets/fonts/JuliusSans.ttf'),
      'tymes': require('./assets/fonts/TymesLittleCaps.otf')
    });
  }
}