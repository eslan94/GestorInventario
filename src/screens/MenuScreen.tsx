import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export const MenuScreen = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.logo} source={require('../images/LogoProductos.png')}/>
            <Text style={styles.texto}>Productos</Text>
        </View>
        <View>
            <Image style={styles.logo} source={require('../images/LogoClientes.png')} />
            <Text style={styles.texto}>Clientes</Text>
        </View>
        <View>
            <Image style={styles.logo} source={require('../images/LogoProveedor.png')}/>
            <Text style={styles.texto}>Proveedores</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf:'center',
        marginVertical: 30,
      },
      texto:{
        marginLeft:20,
        fontSize: 20,
        color: '#0824F2',
        textAlign: 'center'
      },
})
