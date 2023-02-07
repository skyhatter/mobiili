import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Alert, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [object, setObject] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, {key: object}]);
    setObject('');
  }

  const clear = () => {
    setData('');
  }

  return (
    <View style={styles.container}>

      <TextInput
        keyboardType='text'
        style={styles.textbox}
        onChangeText={object => setObject(object)}
        value={object}
      ></TextInput>
      <View style={styles.operators}>
        <View style={styles.buttons}>
          <Button onPress={add} title="ADD" />
      </View>
      <View style={styles.buttons}>
        <Button onPress={clear} title="CLEAR" />
      </View>
    </View>

    <View>
    <Text style={styles.header}>Shopping List </Text>
    <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

      <StatusBar style='auto' />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textbox: {
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1,
  },

  header: {
    color: 'blue'
  },

  operators: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  buttons: {
    width: 'auto',
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 0,
  },

});
