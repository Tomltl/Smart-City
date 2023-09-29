import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, ScrollView, } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

const Attente = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container2}>
        <View style={styles.body2}>
            <View style={styles.haut}>
              <View style={styles.filtre}>
              <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#7502BC', borderRadius: 20, justifyContent: 'center', width: 120, borderWidth: 2, borderColor: '#7502BC'}}>
              <Image
        style={styles.flamme1}
        source={require('../assets/ping.png')}/> 
        <Text style={styles.filtrett}>Itinéraire</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#2D2D2D', borderRadius: 20, justifyContent: 'center', width: 120, borderWidth: 2, borderColor: 'white'}}>
              <Image
        style={styles.artistes12}
        source={require('../assets/heart.png')}/>
                  <Text style={styles.filtret}>Favoris</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#2D2D2D', borderRadius: 20, justifyContent: 'center', width: 120, borderWidth: 2, borderColor: 'white'}}>
              <Image
        style={styles.artistes12}
        source={require('../assets/chariot.png')}/>
                  <Text style={styles.filtret}>Commander</Text>
              </View>
              </View>
              <View style={styles.menu}>
                <View style={{borderBottomWidth: 3, borderColor: '#7502BC',}}>
              <Text style={{color: 'white'}}>MENU</Text>
              </View>
              <Text style={{color: 'white'}} onPress={() => navigation.navigate("Steak Frites2")}>AFFLUENCE</Text>
              <Text style={{color: 'white'}}>HORAIRES</Text>
              </View>
              <View style={styles.all}>
              <Image
                  style={styles.plat}
                  source={require('../assets/Steak.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '600'}}>Steak Frites</Text>
                  <Text style={{color: 'white', fontWeight: '300'}}>Bœuf, Pomme de terre, Sel et</Text>
                  <Text style={{color: 'white', fontWeight: '300'}}>Poivre.</Text>
                  <Text style={{color: 'white', fontWeight: '600'}}>12€</Text>
                  </View>
              </View>
              <View style={styles.all}>
              <Image
                  style={styles.plat}
                  source={require('../assets/frite.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '600'}}>Barquette de Frites</Text>
                  <Text style={{color: 'white', fontWeight: '300'}}>Pomme de terre, Sel, Poivre</Text>
                  <Text style={{color: 'white', fontWeight: '600'}}>5€</Text>
                  </View>
              </View>
            </View>
        </View>
    </View>
  );
};

export default Attente;

const styles = StyleSheet.create({
    filtret: {
        color: 'white',
        paddingVertical: 10 ,
        borderRadius: 5,
    },
    filtrett: {
      color: 'white',
      paddingVertical: 10,
      borderRadius: 5,
  },
    filtre: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    haut: {
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
        backgroundColor: '#7502BC',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      flamme2: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
      },
      flamme1: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 5,
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
        marginTop: 25,
      },
      trois: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25, 
      },
      artiste3 :{
        flexDirection: 'row'
      },
      artistes: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
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
        marginRight: 5,
        // resizeMode: 'contain',
        // width: 10,
        // height: 10,
      },
      menu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
        borderBottomWidth: 2,
        borderColor: '#7502BC',
      },
      plat: {
        marginHorizontal: 20,
        marginVertical: 20,
      },
      all: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
      }
});
