
import { View, Text, Image, ScrollView, TextInput, Alert, StyleSheet, TouchableHighlight, } from 'react-native';
import React from 'react'; 

const App = () => {
  return (
    <View>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 60,
      alignItems: 'center',
      backgroundColor: 'red',
      marginHorizontal: 16,
      marginTop: 16,
      padding: 16,
      borderRadius: 40,
      
      }}>   
      <Image resizeMode='contain' style={{ height: 40, width: 150 }} Source= {require("./src/assets/images/logo emhaes.png")}/>

        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: 'yellow' }}>
        </View>
          </View>  
    
 
        <View >

          </View>
          <View style={{ 
            flexDirection: 'row',
        borderWidth: 1,
            marginTop: 45
            
           }}>
          
          <View style={{
            flex: 1,
            borderWidth: 1,
            padding: 12,
          borderColor: 'black',
            

                      }}>


          <View style={{
            height: 150,
            backgroundColor: 'red',
            borderRadius: 17,
            borderWidth: 1,
          }}></View>
          <Text>Teh oolong</Text>
            <Text>Rp. 23.000</Text>          
        </View>
                  <View style={{
            flex: 1,
            borderWidth: 1,
            padding: 12,
            borderColor: 'black',

                      }}>


          <View style={{
            height: 150,
            backgroundColor: 'red',
            borderRadius: 17,
            borderWidth: 1,
          }}>
        </View>
                  <Text>Teh oolong</Text>
          <Text>Rp. 23.000</Text> 
        </View>
        

      </View>
                <View style={{ 
            flexDirection: 'row',

            borderWidth: 1,
            
           }}>
          
          <View style={{
            flex: 1,
            borderWidth: 1,
            padding: 12,
            borderColor: 'black',

                      }}>


          <View style={{
            height: 150,
            backgroundColor: 'red',
            borderRadius: 17,
            borderWidth: 1,
          }}></View>
          <Text>Teh oolong</Text>
            <Text>Rp. 23.000</Text>          
        </View>
                  <View style={{
            flex: 1,
            borderWidth: 1,
            padding: 12,
            borderColor: 'black',

                      }}>


          <View style={{
            height: 150,
            backgroundColor: 'red',
            borderRadius: 17,
            borderWidth: 1,
          }}>
        </View>
                  <Text>Teh oolong</Text>
          <Text>Rp. 23.000</Text> 
        </View>
        

      </View>
    <View style={{


      height: 60,
      backgroundColor: 'red',
      marginHorizontal: 1,
      marginTop: 200,
      padding: 16,
      borderRadius: 40,
      
      }}><Text style={{
          textAlign : 'center',
        color: '#ffff',
      }}>TEST</Text></View>
</View>
  )
}

export default App;