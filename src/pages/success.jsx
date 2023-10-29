import { View, Text } from 'react-native'
import React from 'react'

const Success = () => {
  return (
    <View>
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 30, textAlign: 'center', marginTop: 300,}}>Selamat!</Text> 
      <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15, textAlign: 'center', marginTop: 1,}}>Makanan berhasil Dipesan!</Text>
    </View>
  )
}

export default Success;