import { useNavigation } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Pressable, Image, TextInput, Alert, value } from "react-native";
import CustomCheckbox from './3ème';
import axios from 'axios'
import firebase from '../config'
import Login from './4ème'

const Home = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState('........');
  const [text2, onChangeText2] = React.useState('........');
  const [text3, onChangeText3] = React.useState('........');
  const [textInputName, setTextInputName] = useState('');
  const [textInputEmail, setTextInputEmail] = useState('');
  const [checked, setChecked] = useState(false);


  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    // <SafeAreaView>
    //     <View style= {styles.container}>
    //         <View style= {styles.body}>
    //   <Text>This is Home</Text>
    //   <Button style= {styles.Button}
    //     onPress={() => navigation.navigate("Second")}
    //     title="Go to second screen!"
    //   />
    //   </View>
    //   <View style= {styles.row}>
    //   <Pressable style= {styles.Button} onPress={() => navigation.navigate("Second")}>
    //     <Text>aaa</Text>
    //   </Pressable>
    //   <Pressable onPress={() => navigation.navigate("Second")}>
    //     <Text>bbb</Text>
    //   </Pressable>
    //   <Pressable onPress={() => navigation.navigate("Second")}>
    //     <Text>ccc</Text>
    //   </Pressable>
    //   </View>
    //   </View>
    // </SafeAreaView>
    <View style={styles.container}>
    <View style={styles.body}>
        <View style={styles.retour}>
    <Pressable onPress={() => navigation.navigate("Home")}>
    {/* <Text style={{color: "white", marginRight: 30,}}>retour</Text>
     */}
     <Image
        style={styles.flamme2}
        source={require('../assets/retour.png')}
      />
    </Pressable>
      <Text style={{fontSize: 30,
                    color: 'white', 
                    fontWeight:'600',
                    marginRight:50,
                    }}>Crée ton compte</Text>
        </View>
    <View>
       <Text style={{fontSize: 20,
                    color: 'white', 
                    fontWeight:'400',
                    }}>Nom complet</Text>
                <TextInput
        style={styles.input}
        placeholder="Nom complet"
        placeholderTextColor="#CBCBCB"
      />
        <Text style={{fontSize: 20,
                            color: 'white', 
                            fontWeight:'400',
                            }}>E-mail</Text>

                <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#CBCBCB"
                    />

        <Text style={{fontSize: 20,
                                    color: 'white', 
                                    fontWeight:'400',
                                    }}>Mot de passe</Text>

                    <TextInput
                            style={styles.input}
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor="#CBCBCB"
                        />
                        </View>

                            <View>
                            <CustomCheckbox checked={checked} onChange={handleToggle} />
                            </View>

                            <Text onPress={() => navigation.navigate("Politique de confidentialité")} style={styles.politique}>Politique de confidentialité</Text>
                        
                        <View>
                        {(() => {
                            if (checked == true){
                                return (
                                    <Pressable style={styles.final}>
                            <Text style={styles.finalt}>Crée ton compte !</Text>
                        </Pressable>
                                )
                            }
                            
                            return null;
                        })()}
                        
                        {(() => {
                            if (checked == false){
                                return (
                                  <Pressable style={styles.final2} onPress={() => Alert.alert("Tu dois accepter la politique de confidentialité pour continuer.")}>
                                  <Text style={styles.finalt}>Crée ton compte !</Text>
                              </Pressable>
                                )
                            }
                            return null;
                        })()}

                        {(() => {
                            
                        })()}
                            
                        </View>
                        <View style={styles.login}>
                        <Text style={styles.finalt}>Si tu as déja un compte !</Text> 
                        <Text onPress={() => navigation.navigate("Login")} style={styles.finalt2}>Connexion</Text>
                        </View>
    </View>
  </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     backgroundColor: 'gold',
    //     justifyContent: 'center',
    // },
    // body: {
    //     // flex: 1,
    //     backgroundColor: 'purple',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // marginBottom: 509,
    // },
    // Button: {
    //     // marginTop: 50,
    //     // backgroundColor: 'red',
    //     // alignItems: "center",
    //     // justifyContent: 'center',
    //     // textAlign: "center",
    //     // alignContent: "center",
    //     // height: 40,
    // },
    // row: {
    //     // flex: 1,
    //     flexDirection: 'row',
    //     backgroundColor: 'red',
    //     alignItems: "center",
    //     justifyContent: 'space-between',
    //     height: 40,
    //     marginHorizontal: 10,
    login: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
      },
      retour: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      body: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 50,
      },
      footer: {
        backgroundColor: 'purple',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: 10,
      },
      flamme: {
        resizeMode: 'contain',
        // backgroundColor: 'blue',
        width: 50,
        height: 50,
      },
      input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        borderColor: '#6AA79E',
        color: 'white',
      },
      final: {
        backgroundColor: '#6AA79E',
        height: 40,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
      },
      final2: {
        backgroundColor: 'rgba(106, 167, 158, 0.40)',
        opacity: 10,
        height: 40,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
      },
      finalt: {
        color: '#F6F4E2',
      },
      finaltt: {
        color: 'red',
      },
      checkBox: {
        color: 'white',
      },
      politique: {
        color: 'white',
        textDecorationLine: 'underline',
      },
      warn: {
        color: 'red',
        textAlign: 'center',
        marginHorizontal: 20,
      },
      flamme2: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 30,
      },
      finalt2: {
        color: '#F6F4E2',
        marginLeft: 8,
        textDecorationLine: 'underline',
      },
    // },
});
