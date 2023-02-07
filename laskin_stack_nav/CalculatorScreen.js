import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from'react-native';

export default function CalculatorScreen({ navigation }) {

    const [nro1, setNro1] = useState('');
    const [nro2, setNro2] = useState('');
    const [tulos, setTulos] = useState('');
    const [data, setData] = useState([]);

    const laske = operator => {
        const [numero1, numero2] = [Number(nro1), Number(nro2)];

        if (isNaN(numero1) || isNaN(numero2)) {
            setTulos(0);
           } else {
            let tulos=0;
           switch (operator) {
            case '+':
              tulos = numero1 + numero2;
              break;
        
            case '-':
              tulos = numero1 - numero2;
              break;
          }
          setTulos(tulos)
          const laskut =`${numero1} ${operator} ${numero2} = ${tulos}`;
          setData([...data, laskut]);
          }  
          setNro1('');
          setNro2('');
          }
     
    return (  
    <View style={styles.container}>
     <Text>Result: {tulos} </Text>

     <TextInput
        keyboardType='numeric'
        style={styles.textbox}
        onChangeText={text => setNro1(text)}
        value={nro1}
     />
     <TextInput
        keyboardType='numeric'
        style={styles.textbox}
        onChangeText={text => setNro2(text)}
        value={nro2}
     />

     <View style={styles.operators}>
        <View style={styles.buttons}>
         <Button onPress={() => laske('+')} title="+" />
        </View>
        <View style={styles.buttons}>
         <Button onPress={() => laske('-')} title="-" />
        </View>
        <View style={styles.buttons}>
         <Button title="History"onPress={() => navigation.navigate('History', {data:[data]})}/> 
        </View>
     </View>

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
  
    textbox: {
      width: 200, 
      borderColor: 'gray', 
      borderWidth: 1,
    },
  
    operators: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  
    buttons: {
      width: 'auto',
      borderColor: 'gray', 
      borderWidth: 1,
      margin: 10,
    },
  
  });