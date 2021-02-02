import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>Text to Speech Convertor</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightgreen'
  },

  text: {
    alignSelf: 'center',
    fontFamily: 'broadway',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20
  },
});
