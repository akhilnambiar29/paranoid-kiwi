import { StyleSheet } from 'react-native';

import { Constants } from 'expo';

export default StyleSheet.create({  
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  center: {    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  centerO: {   
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  centerNF: {    
    alignItems: 'center',
    justifyContent: 'center',
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
  paragraphNM: {
    margin: 4,
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
  subTitle: {    
    textAlign: 'center',
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },    
  question: {    
    textAlign: 'center',
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  }, 
  margin: {
    flex: 1,
  },
  logo: {
    flex: 1,
    height: 500,
    width: 300,
  },  
  superhero: {
    height: 200,
    width: 350,
  },
  party: {
    height: 320,
    width: 400,
  },
  imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
},
imageContainer: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
},
image: {
    height: 644,
    width: 373,
},
colorParty: {  
    backgroundColor: '#ffe7ae',
  },
colorBunqLE: {  
    backgroundColor: '#ffc81f',
  }
});