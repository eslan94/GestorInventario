import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export const RegisterScreen = () => {

    const [usuario, onChangeUsuario] = useState('');
    const [clave, onChangeClave] = useState('');

  return (
    <View style={styles.container}>
        <View>
        <Text style={styles.texto}>Usuario</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsuario} value={usuario} placeholder='usuario'/>
        </View>
        <View>
        <Text style={styles.texto}>Usuario</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsuario} value={usuario} placeholder='usuario'/>
        </View>
        <View>
        <Text style={styles.texto}>Usuario</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsuario} value={usuario} placeholder='usuario'/>
        </View>
        <View>
        <Text style={styles.texto}>Usuario</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsuario} value={usuario} placeholder='usuario'/>
        </View>
        <View>
        <Text style={styles.texto}>Usuario</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsuario} value={usuario} placeholder='usuario'/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center'
    },
    input:{
      height:40,
      marginHorizontal:20,
      marginVertical:10,
      borderWidth:1,
      borderRadius:7,
      padding:10
    },
    texto:{
      marginLeft:20,
      fontSize: 20
    },
})