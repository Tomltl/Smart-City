import { useNavigation } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, ScrollView, TextInput} from "react-native";
import {firebase} from './../config'
import { LinearGradient } from 'expo-linear-gradient';

const Skippy = () => {
  const navigation = useNavigation();
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

    if(initializing) return null;

  return (
    // <SafeAreaView>
    //   <Text>This is Second screen</Text>
    //   <Button onPress={() => navigation.navigate("Modal")} title="Open Modal" />
    // </SafeAreaView>
    <View style={styles.container2}>
    <View style={styles.body2}>
        <View style={styles.haut}>
    <Pressable style= {styles.Button}>
    <Image
        style={styles.flamme2}
        source={require('../assets/loupe.png')}
      />
    </Pressable>
      {/* <Text style={{fontSize: 20, color: 'white'}}>Body Part Text</Text> */}
      {(() => {
    if (user){
        return (
          <Pressable style= {styles.Button} onPress={() => navigation.navigate("Dashboard")}>
    <Image
        style={styles.flamme2}
        source={require('../assets/compte.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
      
      {(() => {
    if (!user){
        return (
          <Pressable style= {styles.Button} onPress={() => navigation.navigate("Registration")}>
    <Image
        style={styles.flamme2}
        source={require('../assets/compte.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
    </View>
      <View>
      <Text style={{color: 'white', fontSize: 32, fontWeight: '600', marginLeft: 25}}>Skip'Eats</Text>
      </View>
      <View>
        <ScrollView>
      <View style={{alignItems: 'center', marginTop: 20,}}>
      <View style={styles.input}>
      <Image
        style={{marginHorizontal: 20,}}
        source={require('../assets/loupe2.png')}
      />
      <TextInput
            // style={styles.input}r
            style={{width: 200,}}
            placeholder="Rechercher ici ..."
            placeholderTextColor="black"
            autoCorrect={false}
            />
            </View>
            </View>
            <View>
            <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
              <View style={styles.filtre1}>
            <Image style={styles.flamme1} source={require('../assets/tacoss.png')}/>
            <Text style={{color: 'white'}}>Taco Fiesta</Text>
            </View>
            <View style={styles.filtre}>
            <Image style={styles.flamme1} source={require('../assets/smoothie.png')}/>
            <Text>Smoothie's</Text>
            </View>
            <View style={styles.filtre}>
            <Image style={styles.flamme1} source={require('../assets/burgeri.png')}/>
            <Text>M. Burger</Text>
            </View>
            <View style={styles.filtre}>
            <Image style={styles.flamme1} source={require('../assets/ramen.png')}/>
            <Text>Salade</Text>
            </View>
        </ScrollView>
              <View style={styles.all}>
              <Image
                  style={styles.plat}
                  source={require('../assets/tacosim.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 18,}}>Tacos mexicain</Text>
                  <Text style={{color: 'white', fontWeight: '300', marginLeft: 15, width: 200, marginTop: 5,}}>Bœuf, Pomme de terre, Sel, Poivre, Jalapeños, Salade</Text>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 20, marginTop: 5,}}>12€</Text>
                  </View>
              </View>
              <Pressable onPress={() => navigation.navigate("Commande")}>
              <View style={styles.all}>
              <Image
                  style={styles.plat}
                  source={require('../assets/avo.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 18,}}>Tacos mexicain avocado</Text>
                  <Text style={{color: 'white', fontWeight: '300', marginLeft: 15, width: 200, marginTop: 5,}}>Saumon, Pomme de terre, Sel, Avocat,</Text>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 20, marginTop: 5,}}>12€</Text>
                  </View>
              </View>
              </Pressable>
              <View style={styles.all}>
              <Image
                  style={styles.plat}
                  source={require('../assets/chili.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 18,}}>Tacos Chili</Text>
                  <Text style={{color: 'white', fontWeight: '300', marginLeft: 15, width: 200, marginTop: 5,}}>Poulet, pomme de terre, sel, chili, oignons frais</Text>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 20, marginTop: 5,}}>12€</Text>
                  </View>
              </View>
              <View style={styles.all}>
              <Image
                  style={styles.plat}
                  source={require('../assets/french.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 18,}}>French Tacos</Text>
                  <Text style={{color: 'white', fontWeight: '300', marginLeft: 15, width: 200, marginTop: 5,}}>Cordon bleu, frites, fromage gouda, sauce barbecue</Text>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 20, marginTop: 5,}}>10€</Text>
                  </View>
              </View>
              <View style={styles.all2}>
              <Image
                  style={styles.plat}
                  source={require('../assets/frenchtaco.png')}/>
                  <View>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 18,}}>French Tacos</Text>
                  <Text style={{color: 'white', fontWeight: '300', marginLeft: 15, width: 200, marginTop: 5,}}>Viande hachée, frites, gratinée cheddar, sauce algérienne</Text>
                  <Text style={{color: 'white', fontWeight: '500', marginLeft: 15, fontSize: 20, marginTop: 5,}}>10€</Text>
                  </View>
              </View>
              </View>
              </ScrollView>
              </View>
    </View>

    <View style={styles.footer2}>
      {(() => {
    if (user){
        return (
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Home2")}>
    <Image
        style={styles.flamme19}
        source={require('../assets/accueil.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
            {(() => {
    if (!user){
        return (
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Home")}>
    <Image
        style={styles.flamme19}
        source={require('../assets/accueil.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
    <Pressable onPress={() => navigation.navigate("Map")}>
    <Image
        style={styles.flamme19}
        source={require('../assets/ping.png')}
      />
    </Pressable>
    
          <Pressable onPress={() => navigation.navigate("Skippy")}>
          <Image
              style={styles.flamme19}
              source={require('../assets/pommep.png')}
            />
          </Pressable> 

      {/* <Text style={{fontSize: 20}}>Footer Part Text</Text> */}
    </View>
  </View>

  );
}

export default Skippy;

const styles = StyleSheet.create({
    haut: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 80,
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
        height: 80,
        flexDirection: 'row',
        paddingHorizontal: 70,
        paddingBottom: 20,
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
        width: 30,
        height: 30,
        marginRight: 10,
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
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      input: {
        flexDirection: 'row',
        color: 'white',
        backgroundColor: '#F6F4E2',
        width: 330,
        height: 40,
        borderRadius: 20,
        justifyContent: 'flex-start',
        textAlign: 'center', 
        alignItems: 'center'
      },
      filtre: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F6F4E2',
        marginLeft: 20,
        height: 50,
        width: 140,
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 20,
      },
      filtre1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7502BC',
        marginLeft: 25,
        height: 50,
        width: 140,
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 20,
      },
      all: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 20,
      },
      all2: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 20,
        paddingBottom: 225
      },
      flamme19: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
      }
});
