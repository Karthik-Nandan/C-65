import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import AppHeader from './components/AppHeader';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  speak = () => {
    var thingToSay = this.state.name;
    Speech.speak(thingToSay);
    console.log(this.state.name);
  };

  render() {
    return (
      <View style={styles.container}>
        
        <AppHeader />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://images.squarespace-cdn.com/content/v1/5ca0f5cb523958b54d169ea3/1567163144538-1P9KLNHCQ416GDEU8F2T/ke17ZwdGBToddI8pDm48kPJXHKy2-mnvrsdpGQjlhod7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmNhTL1csF4IG5y-qj70Wo08mNhyC0Li-nnGmSWmu-RPzBQHhRD1i-jLysqaC42N26/mic.gif',
          }}
        />
        <Text style={styles.text}>1)Type a sentence</Text>
        <Text style={styles.text}>2)Type an emoji to know about it</Text>
        <TextInput
          style={styles.searchBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
        />

        <TouchableOpacity style={styles.goButton} onPress={this.speak}>
          <Text style={styles.buttonText}>Click here to hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 90
  },
  searchBox: {
    marginTop: 10,
    width: '80%',
    alignSelf: 'center',
    height: 50,
    textAlign: 'center',
    borderWidth: 4,
    backgroundColor: 'white',
    fontFamily: 'French Script MT',
    fontSize: 30
  },
  goButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 35,
    marginTop: 30,
    width: 300,
    height: 50,
    backgroundColor: 'skyblue'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'bold',
    fontSize: 20
  },
  text: {
    padding: 1,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'times'
  },
});