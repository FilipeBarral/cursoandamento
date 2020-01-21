import React from 'react'
import { View, StyleSheet } from 'react-native'
import Parimpar from './componentes/Parimpar'
import Simples from './componentes/Simples'

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Simples texto='Olá, estou tentando desenvolver um app em React Native'/>
          <Parimpar numero={30} />
        </View>
      )
    }
  }

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
    tamanhofonte: {
      fontSize:100
    }

})