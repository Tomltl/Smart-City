import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const MyModal = () => {
  return (
    <ScrollView>
      <Text style={styles.confi}>Collecte d'informations</Text>
      <Text style={styles.confi2}>Lorsque vous utilisez notre application de festival, nous pouvons collecter les types d'informations suivants :</Text>
      <Text style={styles.confi2}>1 : Informations personnelles identifiables : Nous pouvons collecter certaines informations personnelles telles que votre nom, votre adresse e-mail, votre numéro de téléphone, votre adresse postale, votre âge, votre sexe, etc. Ces informations peuvent être collectées lorsque vous vous inscrivez à notre application, remplissez des formulaires ou interagissez avec certaines fonctionnalités.</Text>
      <Text style={styles.confi4}>2 : Informations de localisation : Avec votre consentement, nous pouvons collecter des informations sur votre emplacement géographique à des fins de personnalisation et pour vous fournir des services basés sur la localisation.</Text>
      <Text style={styles.confi3}>Utilisation des informations</Text>
      <Text style={styles.confi2}>1 : Fournir et améliorer nos services : Nous utilisons les informations pour vous fournir les fonctionnalités et les services demandés, ainsi que pour améliorer continuellement notre application.</Text>
      <Text style={styles.confi2}>2 : Communication : Nous pouvons utiliser les informations que vous nous avez fournies pour vous contacter par e-mail, par notification push ou par d'autres moyens de communication, afin de vous informer sur les mises à jour, les événements à venir, les offres spéciales et d'autres informations liées à notre festival.</Text>
      <Text style={styles.confi2}>3 : Personnalisation : Nous pouvons utiliser les informations collectées pour personnaliser votre expérience en affichant du contenu et des publicités ciblés en fonction de vos préférences et de votre emplacement.</Text>
      <Text style={styles.confi2}>4 : Sécurité : Nous pouvons utiliser les informations pour protéger la sécurité de notre application, de nos utilisateurs et du public en général, notamment pour détecter, prévenir et traiter les activités frauduleuses, les abus et les violations de nos conditions d'utilisation.</Text>
    </ScrollView>
  );
};

export default MyModal;

const styles = StyleSheet.create({
    confi: {
        marginTop: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    confi2: {
        marginTop: 10,
        textAlign: 'left',
        marginHorizontal: 20,
    },
    confi3: {
        marginVertical: 20,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    confi4: {
        marginVertical: 10,
        textAlign: 'left',
        marginHorizontal: 20,
    },
});
