import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const Detail = () => {
  const navigation = useNavigation(); 

  const navigatetoSuccessScreen = () => {
   
    navigation.navigate('Success'); 
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.itemText}>Teh oolong</Text>
        <Text style={styles.itemPrice}>Rp. 10.000</Text>
        <Image
          resizeMode='contain'
          style={{ height: 300, width: 400, borderRadius: 4 }}
          source={require('../assets/images/tehoolong.png')}
        />

        <Text style={{ color: 'black', marginHorizontal: 1, padding: 16 }}>
          Teh ini terbuat dari tanaman Camellia sinensis, tanaman yang sama digunakan untuk membuat teh hijau dan teh hitam. Perbedaannya terdapat dalam proses pembuatannya.
        </Text>
        <View>
          <TouchableOpacity onPress={navigatetoSuccessScreen}>
            <View
              style={{
                width: 384,
                height: 56,
                backgroundColor: 'red',
                marginTop: 180,
                borderRadius: 35,
              }}
            >
              <Text style={{ fontWeight: 'bold', color: 'white', padding: 16, marginHorizontal: 109 }}>Konfirmasi Pesanan</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  itemPrice: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Detail;
