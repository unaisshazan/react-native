import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  
    fontSize: 30,
    textAlign:'center'
  }
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <SafeAreaView>
      <View>
<Text style={styles.bigBlue}>
  UTech
</Text>
      </View>

      </SafeAreaView>

    );
  }
}
