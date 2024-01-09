import React from 'react';
import {View,Text, Image, Button, StyleSheet, Linking, TextInput, ScrollView} from 'react-native';

const Profilku = () => {
  const url = 'https://www.instagram.com/marwdgd_';
  Linking.openURL(url);
}

const OpenHere = () => {
  const url = 'https://www.figma.com/file/TXIxMtRnnG8wnuVG7khoRz/PeKa-El?type=design&node-id=0-1&mode=design&t=1chiadHKAx3O21aU-0';
  Linking.openURL(url);
}

const App = () => {
  return (
    <ScrollView>
    <View style = {{backgroundColor:'#7b576e', flex:1}}>
      <Text style={{fontWeight:'bold', textAlign:'center', color:'white', marginTop:15}}>My Portofolio</Text>
      
      <View style={{alignItems:'center', padding:15,}} >
        <Image style={{width:200, height:220, borderRadius:20}} source={require('./assets/Damar.jpg')} />
      </View>

      <View 
        style={{
          borderRadius:15,
          width:150,
          alignSelf: 'center',
          overflow: 'hidden',
          marginTop:10
        }}>
        <Button title='Contact Me' color='pink' onPress={Profilku}/>
      </View>

      <View style= {{
        marginTop:13
      }}>
      <Text style={{
        fontSize:24,
        textAlign:'center', 
        color: 'white',
        fontWeight: 'bold',
        }}>Damar Widagdo Hadi</Text>
      </View>

      <View style= {{
        marginTop:10
      }}>
      <Text style={{
        fontSize:14,
        textAlign:'center', 
        color: 'white',
        marginHorizontal:10
        }}>Saya adalah pelajar yang memiliki
          semangat dan kemauan belajar tinggi.
          Saya suka mempelajari sesuatu yang
          belum saya pelajari, mencoba hal hal
          baru, dan saya suka tantangan. Saya
          dapat bertanggung jawab dengan apa
          yang saya kerjakan, saya juga senang
          dan dapat bekerja secara kelompok
          maupun individu. Dengan itu saya
          sangat termotivasi untuk
          mengembangkan kemampuan
          progamming secara profesional.</Text>
      </View>

      <View style= {{
        marginTop:13
      }}>
      <Text style={{
        fontSize:24,
        textAlign:'center', 
        color: 'white',
        fontWeight: 'bold',
        }}>My Recent Project</Text>
      </View>

      <View style={{alignItems:'center', padding:15,}} >
        <Image style={{width:280, height:200, borderRadius:20}} source={require('./assets/Screenshot 2023-10-17 142357.png')} />
      </View>

      <View style= {{
      }}>
      <Text style={{
        fontSize:15,
        fontWeight:'bold',
        color: 'white',
        marginHorizontal:20
        }}>Project Mobile Website</Text>
      </View>

      <View style= {{
      }}>
      <Text style={{
        fontSize:13,
        fontWeight:'bold',
        color: '#cfbfbf',
        marginHorizontal:20
        }}>Brodo</Text>
      </View>

      <View 
        style={{
          borderRadius:15,
          width:100,
          alignSelf: 'center',
          overflow: 'hidden',
          marginTop:10
        }}>
        <Button title='OPEN HERE' color='#351c75' onPress={OpenHere}/>
      </View>

      <View style={{alignItems:'center', padding:15,}} >
        <Image style={{width:280, height:200, borderRadius:20}} source={require('./assets/Screenshot 2023-10-17 143458.png')} />
      </View>

      <View style= {{}}>
      <Text style={{
        fontSize:15,
        fontWeight:'bold',
        color: 'white',
        marginHorizontal:20
        }}>Project Desktop Website</Text>
      </View>

      <View style= {{
      }}>
      <Text style={{
        fontSize:13,
        fontWeight:'bold',
        color: '#cfbfbf',
        marginHorizontal:20
        }}>Brodo</Text>
      </View>

      <View 
        style={{
          borderRadius:15,
          width:100,
          alignSelf: 'center',
          overflow: 'hidden',
          marginTop:10
        }}>
        <Button title='OPEN HERE' color='#351c75' onPress={OpenHere}/>
      </View>

      <TextInput style={{backgroundColor:'white', padding:10, marginVertical:15, borderRadius: 15, marginHorizontal: 20}} placeholder='Tinggalkan Komentar Anda Disini😉' />

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});

export default App;