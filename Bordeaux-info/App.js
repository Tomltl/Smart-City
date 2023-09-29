import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import React, {useEffect, useState} from 'react';
import {firebase} from './config'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import Login from "./src/Login";
import Header from "./components/Header"
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Home from "./screens/Home";
import Second from "./screens/Second";
import CustomCheckbox from "./screens/3ème";
import MyModal from "./screens/MyModal";
import Home2 from "./screens/4ème"
import Map from "./src/Map"
import Festival from "./src/festival"
import Skippy from './src/skippy';
import Attente from './screens/attente';
import Attente2 from './screens/attente2';
import Commande from './src/Commande';

const Stack = createNativeStackNavigator();

function App() {
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
    <Stack.Navigator screenOptions={{ 
      headerShown: true,
      animation: 'fade',
      headerStyle: {
          backgroundColor: 'white',
      }
      }}>
                <Stack.Screen name="Map" component={Map} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="festival" component={Festival} 
        options={{
            title: "Login",
            headerShown: false,
        }}
        />
        <Stack.Screen name="Skippy" component={Skippy} 
        options={{
            title: "Login",
            headerShown: false,
        }}
        />
         <Stack.Screen name="Home"
          component={Second}
          options={{
            title: "Home",
            headerShown: false,
            gestureEnabled: false,
            headerTitleStyle: {
                color: 'red',
                fontSize: 20,
                gestureEnabled: false,
            },
            headerTitleAlign: 'left'
        }}/>
        <Stack.Screen name="Register"
        component={Home}
        options={{
            title: "",
            headerBackTitle: "Back to home",
            headerTintColor: "#6AA79E",
            headerShown: false,
    }} />
            <Stack.Screen name="CustomCheckbox" component={CustomCheckbox} 
        options={{
            title: "troisième",
        }}
        />
        <Stack.Screen name="Commande" component={Commande} 
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen name="Login" component={Login} 
        options={{
            title: "Login",
            headerShown: false,
        }}
        />
        <Stack.Screen name="Registration" component={Registration} 
        options={{
            title: "Registration",
            headerShown: false,
        }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} 
        options={{
            title: "Dashboard",
            headerShown: false,
        }}
        />
        <Stack.Screen name="Home2" component={Home2} 
        options={{
            title: "Home2",
            headerShown: false,
            gestureEnabled: false,
        }}
        />
        <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Politique de confidentialité" component={MyModal}/>
        <Stack.Screen name="Steak Frites" component={Attente} options={{ headerStyle: {
          backgroundColor: '#2D2D2D'
        },
        headerTintColor: '#fff'
        }} />
        <Stack.Screen name="Steak Frites2" component={Attente2} options={{ 
          title: "Steak Frites",
          headerStyle: {
          backgroundColor: '#2D2D2D'
        },
        headerTintColor: '#fff'
        }} />
      </Stack.Group>
  </Stack.Navigator>
  );
}


export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})


