import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { firebase } from "../config";
import { useNavigation } from "@react-navigation/native";
import CustomCheckbox from "../screens/3ème";

const Registration = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  const registerUser = async () => {
    try {
      // Créer l'utilisateur avec l'email et le mot de passe
      await firebase.auth().createUserWithEmailAndPassword(email, password);

      // Enregistrer le prénom, le nom et l'email dans Firestore
      await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
        });

      alert("Inscription réussie !");
      navigation.navigate("Home"); // Remplacez 'Accueil' par le nom de votre écran d'accueil
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.retour}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            {/* <Text style={{color: "white", marginRight: 30,}}>retour</Text>
             */}
            <Image
              style={styles.flamme2}
              source={require("../assets/re.png")}
            />
          </Pressable>
          <Text
            style={{
              fontSize: 30,
              color: "white",
              fontWeight: "600",
              marginRight: 50,
            }}
          >
            Crée ton compte
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "400",
              marginLeft: 10,
            }}
          >
            Prénom
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Prénom"
            onChangeText={(firstName) => setFirstName(firstName)}
            placeholderTextColor="white"
            autoCorrect={false}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "400",
              marginLeft: 10,
            }}
          >
            Nom
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nom"
            onChangeText={(lastName) => setLastName(lastName)}
            placeholderTextColor="white"
            autoCorrect={false}
          />
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "400",
              marginLeft: 10,
            }}
          >
            E-mail
          </Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={(email) => setEmail(email)}
            placeholderTextColor="white"
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
          />

          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "400",
              marginLeft: 10,
            }}
          >
            Mot de passe
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            onChangeText={(password) => setPassword(password)}
            placeholderTextColor="white"
            autoCorrect={false}
            secureTextEntry
            
          />
        </View>

        <View>
          <CustomCheckbox checked={checked} onChange={handleToggle} />
        </View>

        <Text
          onPress={() => navigation.navigate("Politique de confidentialité")}
          style={styles.politique}
        >
          Politique de confidentialité
        </Text>

        <View>
          {(() => {
            if (checked == true) {
              return (
                <TouchableOpacity
                  onPress={() =>
                    registerUser(email, password, firstName, lastName)
                  }
                  style={styles.final}
                >
                  <Text style={styles.creat}>Crée ton compte !</Text>
                </TouchableOpacity>
              );
            }

            return null;
          })()}

          {(() => {
            if (checked == false) {
              return (
                <TouchableOpacity
                  style={styles.final2}
                  onPress={() =>
                    Alert.alert(
                      "Tu dois accepter la politique de confidentialité pour continuer."
                    )
                  }
                >
                  <Text style={styles.creat}>Crée ton compte !</Text>
                </TouchableOpacity>
              );
            }
            return null;
          })()}

          {(() => {})()}
        </View>
        <View style={styles.login}>
          <Text style={styles.finalt}>Si tu as déjà un compte !</Text>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.finalt2}
          >
            Connexion
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  login: {
    flexDirection: "row",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "#63C7FF",
    justifyContent: "center",
  },
  retour: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  body: {
    flex: 1,
    backgroundColor: "#63C7FF",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 50,
  },
  creat: {
    color: "#9FDCFF",
  },
  footer: {
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  flamme: {
    resizeMode: "contain",
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
    borderColor: "#FFFFFF",
    color: "white",
  },
  final: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  final2: {
    backgroundColor: "#FFFFFF",
    opacity: 10,
    height: 40,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  finalt: {
    color: "#F6F4E2",
  },
  finaltt: {
    color: "red",
  },
  checkBox: {
    color: "white",
  },
  politique: {
    color: "white",
    textDecorationLine: "underline",
  },
  warn: {
    color: "red",
    textAlign: "center",
    marginHorizontal: 20,
  },
  flamme2: {
    resizeMode: "contain",
    width: 20,
    height: 20,
    marginRight: 30,
  },
  finalt2: {
    color: "#F6F4E2",
    marginLeft: 8,
    textDecorationLine: "underline",
  },
  // },
});
