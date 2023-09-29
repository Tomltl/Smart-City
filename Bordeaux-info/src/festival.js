import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, ScrollView, } from "react-native";
import {firebase} from './../config'
import { LinearGradient } from 'expo-linear-gradient';

const Festival = () => {
  const navigation = useNavigation();

  return (
    // <SafeAreaView>
    //   <Text>This is Second screen</Text>
    //   <Button onPress={() => navigation.navigate("Modal")} title="Open Modal" />
    // </SafeAreaView>
    <View style={styles.container2}>
    <View style={styles.body2}>


    <ScrollView>
    <View style={styles.hello}>
      <View style={styles.confeti}>
    
      </View>
    </View>
    
    <View style={styles.trois1}>
    <View style={styles.artiste}>
    <Text style={{color: 'white', fontSize: 22, fontWeight: 600, marginTop: 80,}}>Sélectionner votre festival</Text>
    </View>
    {/* <View style={styles.artiste}>
    <Text style={{color: 'white', fontSize: 12,}}>Voir tous</Text>
    </View> */}
    </View>
    <ScrollView horizontal={true} style={styles.artiste3}>
    <View>
    <Image
        style={styles.festival1}
        source={require('../assets/maravilla.png')}
      />
    </View>
    <View>
    <Image
        style={styles.festival}
        source={require('../assets/garorock.png')}
      />
    </View>
    <View>
    <Image
        style={styles.festival}
        source={require('../assets/insolantes.png')}
      />
    </View>
    </ScrollView>
    <View style={styles.trois1}>
    <View>
    <Text style={{color: 'white', fontSize: 22, fontWeight: 600,}}>Recommandations</Text>
    </View>
    </View>
    <ScrollView style={styles.artiste3}>
      <Pressable onPress={() => navigation.navigate("Home")}>
    <View style={styles.maravilla}>
    <Image
        style={styles.artistes12}
        source={require('../assets/maravillal.png')}
      />
      <View style={styles.text9}>
      <Text style={{color: 'white', marginBottom: 10, fontWeight: 600}}>Maravilla</Text>
      <Text style={{color: '#C7C7C7'}}>05 - 08 juin 2023</Text>
      </View>
    </View>
      </Pressable>
    <View style={styles.maravilla}>
    <Image
        style={styles.artistes12}
        source={require('../assets/garorockl.png')}
      />
      <View style={styles.text9}>
      <Text style={{color: 'white', marginBottom: 10, fontWeight: 600}}>Garorock</Text>
      <Text style={{color: '#C7C7C7'}}>29 juin - 02 juillet 2023</Text>
      </View>
    </View>
    <View style={styles.maravilla}>
    <Image
        style={styles.artistes}
        source={require('../assets/ardentesl.png')}
      />
      <View style={styles.text9}>
      <Text style={{color: 'white', marginBottom: 10, fontWeight: 600}}>Les Ardentes</Text>
      <Text style={{color: '#C7C7C7'}}>06 - 10 juillet 2023</Text>
      </View>
      </View>
      <View style={styles.maravilla}>
      <Image
        style={styles.artistes12}
        source={require('../assets/insolantesl.png')}
      />
      <View style={styles.text9}>
      <Text style={{color: 'white', marginBottom: 10, fontWeight: 600}}>Les insolantes</Text>
      <Text style={{color: '#C7C7C7'}}>02 - 03 juin 2023</Text>
      </View>
      </View>
      <View style={styles.maravilla}>
      <Image
        style={styles.artistes}
        source={require('../assets/veillel.png')}
      />
      <View style={styles.text9}>
      <Text style={{color: 'white', marginBottom: 10, fontWeight: 600}}>Vieilles Charrues</Text>
      <Text style={{color: '#C7C7C7'}}>19 - 17 juillet 2023</Text>
      </View>
      </View>
      <View style={styles.maravilla}>
      <Image
        style={styles.artistes}
        source={require('../assets/coachellal.png')}
      />
      <View style={styles.text9}>
      <Text style={{color: 'white', marginBottom: 10, fontWeight: 600}}>Coachella</Text>
      <Text style={{color: '#C7C7C7'}}>06 - 10 juillet 2023</Text>
      </View>
    </View>
    </ScrollView>
    </ScrollView>
    </View>
  </View>
  );

}

export default Festival;

const styles = StyleSheet.create({
    haut: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
      },
    container2: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
      },
      body2: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        // justifyContent: 'space-between',
        // alignItems: 'center',
      },
      footer2: {
        backgroundColor: '#6AA79E',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        flexDirection: 'row',
        paddingHorizontal: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      flamme2: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
      },
      flamme1: {
        resizeMode: 'contain',
        width: 45,
        height: 50,
      },
      hello: {
        marginLeft: 25,
      },
      ici: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#557D77',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        paddingHorizontal: 35,
        borderRadius: 15,
        height: 70,
      },
      artiste: {
        marginTop: 0,
      },
      trois: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25, 
        alignContent: 'center'
      },
      trois1: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25, 
      },
      artiste3 :{
        // flexDirection: 'row'
      },
      artistes: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        marginVertical: 0,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      artistes1: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      flamme11: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        marginLeft: 20,
      },
      confeti: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      artistes12: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      festival1: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        // marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      festival: {
        resizeMode: 'contain',
        width: 300,
        height: 300,
        // marginVertical: 20,
        marginHorizontal: 10,
      },
      maravilla: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
      },
      text9: {
        marginLeft: 20,
      }

});
