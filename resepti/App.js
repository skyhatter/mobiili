import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, Image, ImageBackground } from 'react-native';

export default function App() {

  const [keyword, setKeyword] = useState('');
  const [meal, setMeal] = useState([]);

  const getMeal = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`)
    .then(response => response.json())
    .then(data => setMeal(data.meals))
    .catch(error => {  
      Alert.alert('Error', error);
      console.log(data.meals);

    });}

  const listSeparator = () => <View
    style={{
      height: 1,
      width: "100%",
      backgroundColor: "gray"
    }}
    />

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList 
       keyExtractor={(item,index) => index.toString()}
       data={meal}
       renderItem={({item}) =>
        <View>
          <Image source={{uri: item.strMealThumb}} 
            style = {{width: 50, height: 50, margin: 5}}>
          </Image>
          <View>
           <Text style = {{fontSize:18, fontWeight: "bold"}}>
            {item.strMeal}
           </Text>
          </View>
        </View>
       } 
        ItemSeparatorComponent={listSeparator}
        /> 

      <TextInput style={{fontSize:18, width:200}}
        placeholder='Haku'
        onChangeText={text => setKeyword(text) }
        value={keyword} />

      <Button title="Find" onPress= {getMeal} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
