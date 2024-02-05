import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const LoginScreen = () => {

  const [usuario, onChangeUsuario] = useState('');
  const [clave, onChangeClave] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require('../images/Logo.png')}/> 
      </View>
      <View>
        <Text style={styles.texto}>Usuario</Text>
        <TextInput style={styles.input} onChangeText={onChangeUsuario} value={usuario} placeholder='usuario'/>
      </View>
      <View>
        <Text style={styles.texto}>Contraseña: </Text>
        <TextInput style={styles.input} onChangeText={onChangeClave} value={clave} placeholder='contraseña' secureTextEntry={true}/>
      </View>   
      <View style={styles.boton}>
        <TouchableOpacity style={styles.cajaBoton} >
          <Text style={styles.textoBoton}>Ingresar</Text>
        </TouchableOpacity>
      </View>    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center'
    },
    logo: {
      width: 120,
      height: 120,
      alignSelf:'center',
      padding:20,
      marginBottom: 40
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
    boton:{
      alignItems:'center',
    },
    cajaBoton:{
      backgroundColor: '#525FE1',
      borderRadius:20,
      paddingVertical: 20,
      width:150,
      marginTop:20
    },
    textoBoton:{
      textAlign:'center',
      color:'white',
      fontSize: 25
    },
  });