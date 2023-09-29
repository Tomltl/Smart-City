import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { firebase } from "./../config";
import { LinearGradient } from "expo-linear-gradient";

const Second = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);
  const [encardrerVisible, setEncardrerVisible] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    // Afficher l'encadré uniquement si un utilisateur est connecté
    if (!user) {
      setEncardrerVisible(true);
    } else {
      setEncardrerVisible(false);
    }
  }, [user]);

  return (
    <View style={styles.container2}>
      <View style={styles.body2}>
        <View style={styles.haut}>
          <Text style={styles.headerText}>Actualités locales</Text>
          <Image
            style={styles.flamme22}
            source={require("../assets/fleche-droite.png")}
          />
        </View>
        {encardrerVisible && (
          <View style={styles.encardrer}>
            <View style={styles.encardrerContent}>
            <Text style={{width: 300,}}>
              Si vous voulez des Actualités personnalisées veuillez vous connecter ou créer un compte.
            </Text>
              <TouchableOpacity onPress={() => setEncardrerVisible(false)}>
                <Image
                  style={styles.closeIcon}
                  source={require("../assets/close.png")}
                />
              </TouchableOpacity>
          </View>
          </View>
        )}
        
        <ScrollView>
          <View style={styles.pageDivider}></View>
          <View style={styles.all}>
            <View>
              <Image
                style={styles.flamme2}
                source={require("../assets/Sud.png")}
              />
              <Text style={styles.text}>
                Gironde : Visite du roi Charles III à Bordeaux : suivez les temps fort d’une journée historique
              </Text>
              <Text style={styles.text2}>il y a une heure</Text>
            </View>
            <Image
              style={styles.artiste}
              source={require("../assets/Roi.png")}
            />
          </View>
          <View style={styles.pageDivider}></View>
          <View style={styles.all}>
          <View>
        <Image
            style={styles.flamme2}
            source={require("../assets/france3.png")}
          />
          <Text style={styles.text}>Perturbations du réseau de transport en communs à Bordeaux</Text>
          <Text style={styles.text2}>il y a une heure</Text>
          </View>
          <Image
            style={styles.artiste}
            source={require("../assets/tram.png")}
          />
        </View>
        <View style={styles.pageDivider}></View>
        <View style={styles.all}>
          <View>
        <Image
            style={styles.flamme2}
            source={require("../assets/Liberation.png")}
          />
          <Text style={styles.text}>Coupe du monde Rugby 2023 à Bordeaux : infos pratiques - Brèves - Actualités et services de l’Etat</Text>
          <Text style={styles.text2}>il y a une heure</Text>
          </View>
          <Image
            style={styles.artiste}
            source={require("../assets/rugby.png")}
          />
        </View>
        <View style={styles.pageDivider}></View>
        <View style={styles.all2}>
          <View>
        <Image
            style={styles.flamme2}
            source={require("../assets/Sud.png")}
          />
          <Text style={styles.text}>Decastar de Talence : Une nouvelle chance pour Kevin Mayer de brillé</Text>
          <Text style={styles.text2}>il y a une heure</Text>
          </View>
          <Image
            style={styles.artiste}
            source={require("../assets/javelot.png")}
          />
        </View>
        </ScrollView>
      </View>
      <View style={styles.footer2}>
        <Pressable
          style={styles.Button}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.flamme1}
            source={require("../assets/infob.png")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Map")}>
          <Image
            style={styles.flamme1}
            source={require("../assets/pointv.png")}
          />
        </Pressable>

        {(() => {
          if (user) {
            return (
              <Pressable onPress={() => navigation.navigate("Dashboard")}>
                <Image
                  style={styles.flamme1}
                  source={require("../assets/comptev.png")}
                />
              </Pressable>
            );
          }

          return null;
        })()}
        {(() => {
          if (!user) {
            return (
              <Pressable onPress={() => navigation.navigate("Registration")}>
                <Image
                  style={styles.flamme1}
                  source={require("../assets/comptev.png")}
                />
              </Pressable>
            );
          }

          return null;
        })()}
      </View>
    </View>
  );
};
export default Second;

const styles = StyleSheet.create({
  haut: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 80,
    marginBottom: 20,
  },
  container2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#0B8DD6",
  },
  body2: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  footer2: {
    backgroundColor: "#FFF6F6",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    flexDirection: "row",
    paddingHorizontal: 70,
    paddingBottom: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowOpacity: 0.1,
  },
  pageDivider: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    marginTop: 10,
    marginBottom: 20,
    width: 1000,
    marginLeft: 0,
  },
  all: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  all2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  flamme2: {
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
  flamme22: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  flamme1: {
    resizeMode: "contain",
    width: 40,
    height: 40,
  },
  hello: {
    marginLeft: 25,
  },
  ici: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#7502BC",
    justifyContent: "space-between",
    marginHorizontal: 25,
    paddingHorizontal: 35,
    borderRadius: 15,
    height: 70,
  },
  artiste: {
    marginTop: 20,
  },
  trois: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  artiste3: {
    flexDirection: "row",
  },
  artistes: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  artistes1: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    marginVertical: 20,
    marginHorizontal: 10,
    marginLeft: 25,
  },
  flamme11: {
    resizeMode: "contain",
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  confeti: {
    flexDirection: "row",
    alignItems: "center",
  },
  artistes12: {
    resizeMode: "contain",
    width: 200,
    height: 200,
    marginVertical: 20,
    marginHorizontal: 10,
    marginLeft: 25,
  },
  text: {
    width: 230,
    marginTop: 10,
    fontWeight: "600",
  },
  text2: {
    color: 'gray',
    marginTop: 10,
  },
  encardrer: {
    backgroundColor: "yellow",
    marginHorizontal: 20,
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderRadius: 15,
    marginBottom: 20,
  },
  encardrerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  closeIcon: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
