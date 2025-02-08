import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto1}>APLICACION DE FINANZAS 1</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010107',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto1: {
    color: '#FFFDEB',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    textAlignVertical: 'center',



  }



});