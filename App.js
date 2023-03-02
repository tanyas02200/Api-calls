import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View} from 'react-native';
import React, { Component } from 'react';
import { Button } from 'react-native';
import styles from './styles';
import axios from 'axios';

export default function App() {
  const baseUrl='https://catfact.ninja/fact';
  const [quote,setquote] = React.useState('');
  const ChangeQuote=()=>{
    axios({
      method: 'get',
      url: baseUrl,
    }).then((response) => {
      setquote(response.data.fact);
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.rcorners2}>
     <TextInput placeholder="Quote"
      style={styles.input} 
     value={quote}
     />
     </View>
     <View>
     <Button
     title="Change Quote"
     onPress={ChangeQuote}>
     </Button>
     </View>
     </View>
  );
}
