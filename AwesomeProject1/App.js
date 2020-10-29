import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign:'center'
  }
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
<Text style={styles.bigBlue}>
  UTech
</Text>
      </View>
    );
  }
}
