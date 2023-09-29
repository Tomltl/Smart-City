import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, ScrollView } from "react-native";
import { firebase } from './../config'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from "expo-linear-gradient";

const Dashboard = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')

  useEffect(() => {
    firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data())
        } else {
          console.log('User does not exist')
          console.log(name.firstName)
        }
      })
  }, [])

  return (
    <View style={styles.container2}>
      <View style={styles.retour}>
        <Pressable onPress={() => navigation.navigate("Home2")}>
          {/* <Text style={{color: "white", marginRight: 30,}}>retour</Text>
          */}
        </Pressable>
        <View style={styles.bonj}>
        </View>
      </View>
      <View style={styles.body2}>
        <View style={styles.haut}>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: "auto", height: 80 }}>
            <View style={{ backgroundColor: "#D9D9D9", width: 80, height: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 2, borderColor: 'white', }}>
              <Image
                style={styles.flamme2}
                source={require('../assets/compte.png')}
              />
            </View>
          </View>
          <View style={styles.info}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', marginBottom: 3 }}>{name.firstName} {name.lastName}</Text>
            <Text style={{ color: '#FFFFFF' }}>{name.email}</Text>
          </View>
          <View style={styles.all}>
            <View style={styles.prénom}>
              <View style={styles.lettre}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30, justifyContent: 'space-between' }}>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/Profile.png')}
                  />
                  <Text style={[styles.voile, { textAlign: 'left' }]}>Profil</Text>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/flechetah.png')}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 30 }}>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/GoPro.png')}
                  />
                  <Text style={[styles.voile, { textAlign: 'left' }]}>Go Pro</Text>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/flechetah.png')}
                  />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: 30 }}>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/Confidentialié.png')}
                  />
                  <Text style={[styles.voile, { textAlign: 'left' }]}>Confidentialité</Text>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/flechetah.png')}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: 30 }}>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/Paramètre.png')}
                  />
                  <Text style={[styles.voile, { textAlign: 'left' }]}>Paramètre</Text>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/flechetah.png')}
                  />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: 30 }}>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/Apropos.png')}
                  />
                  <Text style={[styles.voile, { textAlign: 'left' }]}>À propos de nous</Text>
                  <Image
                    style={styles.apagnan}
                    source={require('../assets/flechetah.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer2}>
        <Pressable style={styles.Button} onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.flamme1}
            source={require('../assets/infov.png')}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Map")}>
          <Image
            style={styles.flamme1}
            source={require('../assets/pointv.png')}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Dashboard")}>
          <Image
            style={styles.flamme1}
            source={require('../assets/compteb.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  haut: {
    // marginHorizontal: 20,
    // marginRight: 50,
    // marginTop: 80,
  },
  info: {
    alignItems: "center",
    marginVertical: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: '#63C7FF',
    justifyContent: 'center',
  },
  body2: {
    flex: 1,
    backgroundColor: '#63C7FF',
  },
  all: {
    backgroundColor: '#FFFFFF',
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 470,
    display: "flex",
  },
  retour: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 20,
    marginTop: 80,
    alignItems: 'center'
  },
  bonjour: {
    color: 'white',
    fontWeight: 600,
    fontSize: 30,
    marginRight: 50,
  },
  bonj: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  footer2: {
    backgroundColor: '#FFF6F6',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    flexDirection: 'row',
    paddingHorizontal: 70,
    paddingBottom: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOpacity: 0.1,
  },
  flamme2: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
  },
  flamme22: {
    resizeMode: 'contain',
    width: 50,
    height: 30,
  },
  flamme222: {
    resizeMode: 'contain',
    width: 50,
    height: 30,
    opacity: 0
  },
  flamme1: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },
  flamme17: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    transform: [{ scaleX: -1 }],
    // paddingRight: 130,
  },
  flamme16: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    transform: [{ scaleX: -1 }],
    marginRight: 10,
    // paddingRight: 130,
  },
  flamme18: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    marginLeft: 10,
    // paddingRight: 130,
  },
  flamme3: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginRight: 30,
  },
  flamme4: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
  },
  prénom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 40,
    marginLeft: 40,
    marginTop: 50,
    borderBottomWidth: 2,
    borderColor: '#6AA79E',
    paddingBottom: 10,
  },
  prénom2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 40,
    marginLeft: 40,
    marginTop: 50,
    borderBottomWidth: 2,
    borderColor: '#2D2D2D',
    paddingBottom: 10,
  },
  maravilla: {
    flexDirection: 'row',
  },
  festival: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#424140',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    paddingBottom: 5,
    marginTop: 20,
  },
  voile: {
    // backgroundColor: 'red',
    fontSize: 20,
    marginVertical: 27,
    marginRight: 30,
    textAlign: 'left',
  },
  lettre: {
    top: 50,
  },
  prénom: {
    textAlign: 'left',
  },
});
