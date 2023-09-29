import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Image, Text, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../config';
import 'firebase/firestore'; 
import * as Location from 'expo-location';
import Modal from 'react-native-modal';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '../config'; // Assurez-vous que le chemin est correct


const Map = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [location, setLocation] = useState(null);
    const [gyroscopeData, setGyroscopeData] = useState({ x: 0, y: 0, z: 0 });
    const [toiletOptions, setToiletOptions] = useState([]);
    const [selectedToilet, setSelectedToilet] = useState(null);
    const [toilets, setToilets] = useState([]);
    const [showToilets, setShowToilets] = useState(true);
    const [fountains, setFountains] = useState([]);
    const [showFountains, setShowFountains] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [reporting, setReporting] = useState(false);
    const [reportText, setReportText] = useState('');
    const [reportDescription, setReportDescription] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showRoute, setShowRoute] = useState(false);

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    useEffect(() => {
        async function getLocationAsync() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission de géolocalisation refusée');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        }

        getLocationAsync();
    }, []);

    useEffect(() => {
        async function fetchToiletsData() {
            try {
                const response = await fetch(
                    'https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_sigsanitaire/records?limit=100'
                );
                const data = await response.json();
                const toiletData = data.results.map(record => ({
                    id: record.recordid,
                    latitude: record.geo_point_2d.lat,
                    longitude: record.geo_point_2d.lon,
                    title: record.adresse,
                    description: record.type,
                }));
                setToilets(toiletData);
                setToiletOptions(toiletData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données des toilettes :', error);
            }
        }

        fetchToiletsData();
    }, []);

    useEffect(() => {
        async function fetchFountainsData() {
            try {
                const response = await fetch(
                    'https://opendata.bordeaux-metropole.fr/api/explore/v2.1/catalog/datasets/bor_fontaines_eau_potable/records?limit=100'
                );
                const data = await response.json();
                const fountainData = data.results.map(record => ({
                    latitude: record.geom.lat,
                    longitude: record.geom.lon,
                    title: record.nom_fontaine,
                    description: `Modèle : ${record.modele_fontaine}\nÉtat : ${record.etat}`,
                }));
                setFountains(fountainData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données des fontaines :', error);
            }
        }

        fetchFountainsData();
    }, []);

    if (initializing || location === null) return null;

    const navigation = useNavigation();

    const userRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0120,
        longitudeDelta: 0.00100,
    };

    const markerRotation = -gyroscopeData.alpha;

    const handleToiletSelection = (toiletId) => {
        const selected = toiletOptions.find(toilet => toilet.id === toiletId);
        setSelectedToilet(selected);
        setIsModalVisible(true); // Ouvre le modal lorsque vous cliquez sur un marqueur
    };

    const handleReport = () => {
        setReporting(!reporting);
    };

    const handleSendReport = () => {
        if (!reportText || !reportDescription) {
            console.log('Veuillez remplir tous les champs du signalement');
            return;
        }

        const reportsRef = firebase.firestore().collection('signalements');
        const reportData = {
            description: reportText,
            autreInformation: reportDescription,
        };

        reportsRef.add(reportData)
            .then(() => {
                console.log('Signalement envoyé avec succès !');
                setReporting(false);
                setReportText('');
                setReportDescription('');
            })
            .catch(error => {
                console.error('Erreur lors de l\'envoi du signalement :', error);
            });
    };

    // Filtrer les toilettes en fonction du texte de recherche
    const filteredToilets = toilets.filter(toilet =>
        toilet.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // Filtrer les fontaines en fonction du texte de recherche
    const filteredFountains = fountains.filter(fountain =>
        fountain.title.toLowerCase().includes(searchText.toLowerCase())
    );

    // Fonction pour fermer le modal
    const closeModal = () => {
        setIsModalVisible(false);
    };

    // Fonction pour afficher le trajet
    const handleShowRoute = () => {
        // Ici, vous pouvez ajouter votre logique pour calculer le trajet jusqu'au marqueur sélectionné.
        // Par exemple, utilisez des coordonnées pour calculer le trajet avec une bibliothèque de navigation comme react-native-maps-directions.

        // Après avoir calculé le trajet, vous pouvez afficher le trajet et fermer le modal.
        setShowRoute(true);
        setIsModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={userRegion}
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Votre position"
                        description="Vous êtes ici"
                        image={require('../assets/position.png')}
                        rotation={markerRotation}
                    />
                )}

                {showToilets && filteredToilets.map((toilet, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: toilet.latitude,
                            longitude: toilet.longitude,
                        }}
                        title={toilet.title}
                        description={toilet.description}
                        image={require('../assets/toilet.png')}
                        onPress={() => handleToiletSelection(toilet.id)} // Gère le clic sur un marqueur de toilette
                    />
                ))}

                {showFountains && filteredFountains.map((fountain, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: fountain.latitude,
                            longitude: fountain.longitude,
                        }}
                        title={fountain.title}
                        description={fountain.description}
                        image={require('../assets/fontaine.png')}
                    />
                ))}
            </MapView>
            
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, showToilets ? styles.activeButton : null]}
                    onPress={() => setShowToilets(!showToilets)}
                >
                    <Text style={styles.buttonText}>Toilette</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, showFountains ? styles.activeButton : null]}
                    onPress={() => setShowFountains(!showFountains)}
                >
                    <Text style={styles.buttonText}>Fontaine</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, reporting ? styles.activeButton : null]}
                    onPress={handleReport}
                >
                    <Text style={styles.buttonText}>{reporting ? 'Annuler' : 'Signaler'}</Text>
                </Pressable>
                <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Rechercher des toilettes ou des fontaines"
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                />
                </View>
            </View>
            {reporting && (
                <View style={styles.reportContainer}>
                    <TextInput
                        style={styles.reportInput}
                        placeholder="Nom des toilettes/fontaine en problème"
                        value={reportText}
                        onChangeText={text => setReportText(text)}
                    />
                    <TextInput
                        style={styles.reportInput}
                        placeholder="Information"
                        value={reportDescription}
                        onChangeText={text => setReportDescription(text)}
                    />
                    <Pressable
                        style={styles.reportButton}
                        onPress={handleSendReport}
                    >
                        <Text style={styles.reportButtonText}>Envoyer</Text>
                    </Pressable>
                </View>
            )}

            {/* Modal pour afficher les détails du marqueur sélectionné */}
            <Modal
                transparent={true}
                animationType="slide"
                isVisible={isModalVisible}
                onBackdropPress={closeModal}
                swipeDirection="down"
                onSwipeComplete={closeModal}
                style={styles.modalContainer}
                hideModalContentWhileAnimating={true}
            >
                <View style={styles.modalContent} onPress={closeModal}>
                    <Text style={styles.modalTitle}>Détails du Marqueur</Text>
                    {selectedToilet && (
                        <View>
                            <Text>Titre: {selectedToilet.title}</Text>
                            <Text>Description: {selectedToilet.description}</Text>
                            <Pressable onPress={handleShowRoute}>
                                <Text style={styles.routeButton}>Trajet</Text>
                            </Pressable>
                        </View>
                    )}
                    <Pressable onPress={closeModal}>
                        <Text style={styles.closeButton}>Fermer</Text>
                    </Pressable>
                </View>
            </Modal>

            {/* Affichage du trajet */}
            {showRoute && selectedToilet && (
                <MapViewDirections
                    apiKey="AIzaSyBctv41kPtDehwITRGq_RpnZyOhHZD_nng" // Assurez-vous que GOOGLE_MAPS_API_KEY est correctement importé
                    origin={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                    destination={{ latitude: selectedToilet.latitude, longitude: selectedToilet.longitude }}
                    strokeWidth={5}
                    strokeColor="blue"
                />
            )}

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
                        source={require('../assets/pointb.png')}
                    />
                </Pressable>

                {(() => {
                    if (user){
                        return (
                            <Pressable onPress={() => navigation.navigate("Dashboard")}>
                                <Image
                                    style={styles.flamme1}
                                    source={require('../assets/comptev.png')}
                                />
                            </Pressable>
                        )
                    }
                    
                    return null;
                })()}
                {(() => {
                    if (!user){
                        return (
                            <Pressable onPress={() => navigation.navigate("Registration")}>
                                <Image
                                    style={styles.flamme1}
                                    source={require('../assets/comptev.png')}
                                />
                            </Pressable>
                        )
                    }
                    
                    return null;
                })()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
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
    },
    flamme2: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
    },
    flamme1: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    markerImage: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        backgroundColor: 'red',
    },
    carte: {
        resizeMode: 'contain',
        width: 10,
        height: 10,
    },
    searchContainer: {
        position: 'absolute',
        top: 50,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    searchInput: {
        fontSize: 16,
        paddingVertical: 10,
    },
    buttonContainer: {
        position: 'absolute',
        top: 20,
        left: 20,
        flexDirection: "row",
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        display: "flex",
        marginHorizontal: 20,
        marginTop: 120,
    },
    activeButton: {
        backgroundColor: 'darkblue',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    reportContainer: {
        position: 'absolute',
        bottom: 450,
        left: 20,
        right: 20,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    reportInput: {
        fontSize: 16,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
    },
    toiletPicker: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
    reportButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    reportButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    closeButton: {
        fontSize: 18,
        color: 'blue',
        textAlign: 'center',
        marginTop: 20,
    },
    routeButton: {
        fontSize: 18,
        color: 'blue',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Map;
