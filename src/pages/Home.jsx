import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
          <View style={styles.header}>
              <Image
              resizeMode='contain'
              style={styles.logo}
              source={require("../assets/images/logo.png")}
              />
              
        <View style={styles.iconContainer}></View>
          </View>

      <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.item}>
                  <Image
                    resizeMode='contain'
                    style={styles.itemImage}
                    source={require('../assets/images/tehoolong.png')}
                  />
              <Text style={styles.itemText}>Teh oolong</Text>
              <Text style={styles.itemPrice}>Rp. 10.000</Text>
            </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.item}>
          <Image
            resizeMode='contain'
            style={styles.itemImage}
            source={require('../assets/images/berger.jpg')}
          />
          <Text style={styles.itemText}>Burger sapi</Text>
          <Text style={styles.itemPrice}>Rp. 15.000</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.item}>
          <Image
            resizeMode='contain'
            style={styles.itemImage}
            source={require('../assets/images/susuwafer.webp')}
          />
          <Text style={styles.itemText}>Susu Wafer</Text>
          <Text style={styles.itemPrice}>Rp. 18.000</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Detail')} style={styles.item}>
          <Image
            resizeMode='contain'
            style={styles.itemImage}
            source={require('../assets/images/indomie.jpg')}
          />
          <Text style={styles.itemText}>Indomie</Text>
          <Text style={styles.itemPrice}>Rp. 5.000</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.footerText}>TEST</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    backgroundColor: 'red',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 40,
  },
  logo: {
    height: 40,
    width: 150,
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'yellow',
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 45,
  },
  item: {
    flex: 1,
    borderWidth: 1,
    padding: 12,
    borderColor: 'black',
  },
  itemImage: {
    height: 150,
    width: '100%',
    borderRadius: 17,
    borderWidth: 1,
  },
  itemText: {
    color: '#000000',
    fontWeight: 'bold'
  },
  itemPrice: {
    color: '#000000',
    fontWeight: 'bold'
  },
  footer: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  footerText: {
    height: 60,
    backgroundColor: 'red',
    marginHorizontal: 1,
    marginTop: 200,
    padding: 16,
    borderRadius: 40,
    textAlign: 'center',
    color: '#ffff',
  },
});

export default Home;
