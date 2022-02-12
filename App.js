import * as React from 'react';
import { Text, View, StyleSheet,TextInput, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
textToSay:""
    }
  }
  speak=()=>{
var word=this.state.textToSay
Speech.speak(word)
  };

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'#add8e6'}
            centerComponent={{
              text: ' Text to Hear',
              style: { color: 'black', fontSize: 28 },
            }}
          />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://developer-blogs.nvidia.com/wp-content/uploads/2019/12/text-to-speech.png',
          }}
        />
          
         <TextInput style={styles.inputBox}
       onChangeText=
       {(text)=>{this.setState({textToSay:text})}}
     value={this.state.textToSay}/>


        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.speak()
        }}>
          <Text style = {styles.displayText}>Click to Hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ''
  },
  inputBox: {
    marginTop: 50,
    width: '75%',
    alignSelf: 'center',
    height: 45,
    textAlign: 'center',
    borderWidth: 5,
    fontSize: 20,
    borderColor: 'gray',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: 'lightblue'
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});
