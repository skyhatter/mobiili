import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from'react-native';

export default function HistoryScreen({route}) {

    const { data } = route.params;
    const history = [];
    return (  
    <View style={styles.container}>
        <Text>History: </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
         return <Text> {item} </Text>
       }}/>
    
    <StatusBar style='auto' />
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