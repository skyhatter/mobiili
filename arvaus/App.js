import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Alert, Button, TextInput, FlatList } from 'react-native';

const target = Math.floor(Math.random() * 100) + 1;
let guesses = 0;
export default function App() {

const [value, setValue] = useState('');
const [text, setText] = useState('Guess number between 1 and 100');

const clicked = () => {

  const guessValue = parseInt(value, setValue);
  if (guessValue < target) guesses = guesses + 1, setText('Your guess is too low')
  else if (guessValue > target) guesses = guesses + 1, setText('Your guess is too high')
  else if (guessValue === target) Alert.alert('You guessed the number in ' + guesses + ' guesses');
  console.log(target);
}



  return (
    <View style={styles.container}>

      <Text> { text } </Text>

      <TextInput
        type='number'
        keyboardType='numeric'
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={value => setValue(value)}
        value={value}
        />
      
      <StatusBar style={{flex:1, flexDirection: 'row'}} />
      <Button onPress={clicked} title="arvaa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
