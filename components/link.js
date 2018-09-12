import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Link extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.link}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    margin: 24,
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  }
});
