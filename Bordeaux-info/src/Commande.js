import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, ScrollView, } from "react-native";
import {firebase} from './../config'
import { LinearGradient } from 'expo-linear-gradient';

const Commande = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(12);

  const incrementCount = () => {
    setCount(count + 1);
    setPrice(price + 12);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice(price - 12);
    }
  };
  return (
    // <SafeAreaView>
    //   <Text>This is Second screen</Text>
    //   <Button onPress={() => navigation.navigate("Modal")} title="Open Modal" />
    // </SafeAreaView>
    <View style={styles.container2}>
    <View style={styles.body2}>
        <View style={styles.haut}>

    </View>
    <View style={styles.hello}>
      <View style={styles.confeti}>
    <Text style={{color: 'white', fontSize: 36, fontWeight: 600, paddingBottom: 30}}>Panier</Text>
      </View>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
      <Text style={{color: 'white', fontSize: 18,}}>Taco Fiesta</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View>
      <View style={styles.commande1}>
      <Text style={{color: 'white', fontSize: 16, marginLeft: 40, fontWeight: '600'}}>tacos mexicain avocado</Text>
      <Image
        style={styles.flamme123}
        source={require('../assets/avo.png')}
      />
      </View>
      <View style={styles.commande}>
        <View style={styles.moins}>
        {(() => {
    if (count>0){
        return (
            <Text style={styles.plus} onPress={decrementCount}>-</Text>
            )
          }
          
          return null;
      })()}
                  {(() => {
    if (count == 0){
        return (
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Skippy")}>
    <Image
        style={styles.flamme147}
        source={require('../assets/poubelle.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
      <Text style={styles.plus2}>{count}</Text>
      <Text style={styles.plus} onPress={incrementCount}>+</Text>
      </View>
      <Text style={{color: 'white', fontSize: 18, marginRight: 35,}}>{price}€</Text>
      </View>
    </View>
    </View>

    <View style={styles.footer2}>
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Home")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/accueil.png')}
      />
    </Pressable>
    <Pressable onPress={() => navigation.navigate("Map")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/ping.png')}
      />
    </Pressable>
    <Pressable onPress={() => navigation.navigate("Skippy")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/pomme.png')}
      />
    </Pressable>
      {/* <Text style={{fontSize: 20}}>Footer Part Text</Text> */}
    </View>
  </View>
  );

}

export default Commande;

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
        backgroundColor: '#7502BC',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      flamme17: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        transform: [{scaleX: -1}],
        // paddingRight: 130,
      },
      flamme2: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
      },
      flamme1: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
      },
      flamme147: {
        resizeMode: 'contain',
        width: 17,
        height: 17,
      },
      flamme123: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        marginRight: 20,
      },
      hello: {
        alignItems: 'center',
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
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      commande: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      commande1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50,
      },
      plus: {
        color: 'white',
        fontSize: 30,
        // backgroundColor: '#7502BC',
        // width: 80,
        textAlign: 'center',
        borderRadius: 20,
      },
      plus2: {
        color: 'white',
        fontSize: 20,
        // backgroundColor: '#7502BC',
        // width: 80,
        textAlign: 'center',
        borderRadius: 20,
      },
      plus3: {
        color: 'white',
        fontSize: 36,
        // backgroundColor: '#7502BC',
        // width: 80,
        textAlign: 'center',
        borderRadius: 20,
      },
      moins: {
        flexDirection: 'row',
        backgroundColor: '#7502BC',
        justifyContent: 'space-between',
        borderRadius: 20,
        width: 120,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        marginLeft: 40,
        height: 40,
      }

});
