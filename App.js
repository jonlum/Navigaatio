import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from './History';

const Stack = createNativeStackNavigator();

function Calculator({ navigation }) {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);

  const add = () => {
    let result = parseInt(text1) + parseInt(text2);
    let text = text1 + " + " + text2 + " = " + result;
    setData([...data, { key: text }]);
    setText1('');
    setText2('');
    return result;

  };
  const sub = () => {
    let result = parseInt(text1) - parseInt(text2);
    let text = text1 + " - " + text2 + " = " + result;
    setData([...data, { key: text }]);
    setText1('');
    setText2('');
    return result;

  };

  return (
    <><View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text1 => setText1(text1)} value={text1} />
      <TextInput style={styles.input} keyboardType='number-pad' onChangeText={text2 => setText2(text2)} value={text2} />
      <StatusBar style="auto" />
    </View>
      <View style={styles.container2}>
        <Button onPress={() => setResult(add)} title="+" />
        <Button onPress={() => setResult(sub)} title="-" />
        <Button
          title="History"
          onPress={() => navigation.navigate('History', { data })}
        />
        <StatusBar style="auto" />
      </View></>
  );
}

export default function App() {

  return (



    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Calculator} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 100
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }


});

