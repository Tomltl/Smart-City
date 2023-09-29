import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {firebase} from './../config'
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const changePassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          alert('Si cette email est associé à un compte vous recevrez un e-mail de réinitialisation de mot de passe !')
        })
        .catch(error => {
            alert('Veuillez entré votre email afin de réinitialiser votre mot de passe.')
        })
      }

    loginUser = async (email, password) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password),
            console.log(firebase.auth())
            navigation.navigate("Home")
        } catch (error) {
            alert ("E-mail ou mot de passe invalide.")
            console.log(error)
        }
    }
    return (
        <View style={styles.container}>
        <View style={styles.body}>
            <View style={styles.retour}>
        <Pressable onPress={() => navigation.navigate("Home")}>
         <Image
            style={styles.flamme2}
            source={require('../assets/re.png')}
          />
        </Pressable>
          <Text style={{fontSize: 30,
                        color: 'white', 
                        fontWeight:'600',
                        marginRight:50,
                        }}>Connecte toi !</Text>
            </View>
        <View>
            <Text style={{fontSize: 20,
                                color: 'white', 
                                fontWeight:'400',
                                marginLeft: 10,
                                }}>E-mail</Text>
    
                    <TextInput
                            style={styles.input}
                            onChangeText={(email) => setEmail(email)}
                            placeholder="E-mail"
                            placeholderTextColor="white"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
    
            <Text style={{fontSize: 20,
                                        color: 'white', 
                                        fontWeight:'400',
                                        marginLeft: 10,
                                        }}>Mot de passe</Text>
    
                        <TextInput
                                style={styles.input}
                                onChangeText={(password) => setPassword(password)}
                                secureTextEntry
                                placeholder="Mot de passe"
                                placeholderTextColor="white"
                            />
                            </View>
    
                            <View>
                                        <TouchableOpacity onPress={() => loginUser(email, password)} style={styles.final}>
                                <Text style={styles.finaltc}>Connecte toi !</Text>
                            </TouchableOpacity>

                                      
                            </View>
                            <View style={styles.login2}>
                            <View style={styles.login}>
                            <Text style={styles.finalt}>Mot de passe oublié ?</Text> 
                            <Text  onPress={()=>{changePassword()}} style={styles.finalt2}>Le réinitialiser</Text>
                            </View>
                            <View style={styles.login}>
                            <Text style={styles.finalt}>Si tu n'as pas de compte !</Text> 
                            <Text onPress={() => navigation.navigate("Register")} style={styles.finalt2}>S'enregistrer</Text>
                            </View>
                            </View>
        </View>
      </View>
      );
    };
    

export default Login

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    container: {
        flex: 1,
        backgroundColor: '#63C7FF',
        justifyContent: 'center',
      },
      retour: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      body: {
        flex: 1,
        backgroundColor: '#63C7FF',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 100,
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
        borderColor: '#FFFFFF',
        color: 'white',
      },
      final: {
        backgroundColor: '#FFFFFF',
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
      finaltc: {
        color: '#63C7FF',
        fontWeight: 600,
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
      login2: {
        alignItems: 'center'
      }
    // },
});