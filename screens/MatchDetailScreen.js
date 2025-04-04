import React from "react";
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView, 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MapView, { Marker } from "react-native-maps";
import globalStyles from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import { useEffect, useState } from "react";
import { getStadiumCoordinates } from "../utils/LocationHelper";

const MatchDetailScreen = ({ route, navigation }) => {
    const { match } = route.params;

    const homeCompetitor = match.competitions[0]?.competitors[0] || {};
    const awayCompetitor = match.competitions[0]?.competitors[1] || {};
    
    const homeTeam = homeCompetitor.team || {};
    const awayTeam = awayCompetitor.team || {};
    
    const homeForm = homeCompetitor.form || '----';
    const awayForm = awayCompetitor.form || '----';
    
    const homeRecord = homeCompetitor.records?.[0]?.summary || 'N/A';
    const awayRecord = awayCompetitor.records?.[0]?.summary || 'N/A';

    const venue = match.competitions[0]?.venue || {};
    
    const [stadiumCoords, setStadiumCoords] = useState(null);

    useEffect(() => {
        const fetchCoords = async () => {
          const result = await getStadiumCoordinates(venue);
          if (result) {
            setStadiumCoords(result);
          } else {
            setStadiumCoords({
              latitude: 52.939899,
              longitude: -1.13258,
            });
          }
        };
        fetchCoords();
      }, []);
      

    const matchDate = new Date(match.date);
    const formattedDate = matchDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    const formattedTime = matchDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <ScrollView style={[globalStyles.container, styles.contentPadding]}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon style= {styles.icon} name="arrow-left" size={20} color={colors.primary} />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>

            <View style={styles.header}>
                <Text style={styles.title}>
                    {homeTeam.displayName} vs {awayTeam.displayName}
                </Text>
                <Text style={styles.date}>
                    {formattedDate} | {formattedTime}
                </Text>
            </View>

            <View style={styles.teamsContainer}>
                <View style={styles.teamContainer}>
                    <Image source={{ uri: homeTeam.logo }} style={styles.logo} />
                    <Text style={styles.teamName}>{homeTeam.displayName}</Text>
                    
                    <View style={styles.formContainer}>
                        {homeForm.split('').map((result, index) => (
                            <Text key={index} style={[
                                styles.formText,
                                { color: 
                                    result === 'W' ? '#4CAF50' :
                                    result === 'L' ? '#F44336' : '#9E9E9E'
                                }
                            ]}>
                                {result}
                            </Text>
                        ))}
                    </View>
                    
                    <Text style={styles.recordText}>{homeRecord}</Text>
                </View>

                <Text style={styles.vsText}>VS</Text>

                <View style={styles.teamContainer}>
                    <Image source={{ uri: awayTeam.logo }} style={styles.logo} />
                    <Text style={styles.teamName}>{awayTeam.displayName}</Text>
                    
                    <View style={styles.formContainer}>
                        {awayForm.split('').map((result, index) => (
                            <Text key={index} style={[
                                styles.formText,
                                { color: 
                                    result === 'W' ? '#4CAF50' :
                                    result === 'L' ? '#F44336' : '#9E9E9E'
                                }
                            ]}>
                                {result}
                            </Text>
                        ))}
                    </View>
                    
                    <Text style={styles.recordText}>{awayRecord}</Text>
                </View>
            </View>

            <View style={styles.detailsContainer}>
                <Text style={styles.detail}>Venue: {venue.fullName || "N/A"}</Text>
                <Text style={styles.detail}>City: {venue.address?.city || "N/A"}</Text>
            </View>

            <View style={styles.mapContainer}>
  <Text style={styles.sectionHeader}>Stadium Location</Text>
  {stadiumCoords && (
    <MapView
      style={styles.map}
      initialRegion={{
        ...stadiumCoords,
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
      <Marker
        coordinate={stadiumCoords}
        title={venue.fullName}
        description={venue.address?.city}
      />
    </MapView>
  )}
</View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contentPadding: {
        paddingBottom: 20,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    backButtonText: {
        fontSize: 20,  // Increased font size
        fontWeight: "bold",
        color: colors.primary,
        marginLeft: 8,
        marginTop: 10,
    },
    icon: {
        marginTop: 10,
    },
    header: {
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 16,
        borderRadius: 12,
        margin: 10, 
    },
    title: {
        fontSize: 26,  // Increased font size
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center",
    },
    date: {
        fontSize: 16,  // Increased font size
        color: colors.white,
        textAlign: "center",
        marginTop: 6,
    },
    teamsContainer: {
        flexDirection: "row",
        justifyContent: "center",  // Center teams horizontally
        alignItems: "center",
        marginBottom: 20,
    },
    teamContainer: {
        alignItems: "center",
        width: "40%",  // Reduced width to make space for the VS text
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 8,
    },
    teamName: {
        fontSize: 18,  // Increased font size
        fontWeight: "bold",
        textAlign: "center",
        color: colors.text,
    },
    vsText: {
        fontSize: 20,  // Increased font size
        fontWeight: "bold",
        color: colors.accent,
        width: 50,  // Set width to create space between the teams
        textAlign: "center",
    },
    detailsContainer: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 15,
        width: '80%',
        alignSelf: "center",
    },
    detail: {
        fontSize: 16,  // Increased font size
        color: colors.text,
        marginBottom: 4,
        textAlign: "center",
    },
    mapContainer: {
        width: '90%',
        height: 200,
        alignSelf: "center",
        marginBottom: 70,
        alignItems: 'center'
    },
    map: {
        width: "100%",
        height: "100%",
    },
    sectionHeader: {
        fontSize: 18,  
        fontWeight: 'bold',
        color: colors.primary,
        padding: 12,
        backgroundColor: colors.background,
    },
    watchlistButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        paddingVertical: 6,
        borderRadius: 8,
        width: "80%",
        alignSelf: "center",
        marginTop: 40,
    },
    watchlistButtonText: {
        fontSize: 16,  // Increased font size
        color: "white",
        fontWeight: "bold",
        marginLeft: 8,
    },
    formContainer: {
        flexDirection: 'row',
        marginTop: 4,
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: 100,
    },
    formText: {
        fontSize: 14,  // Increased font size
        fontWeight: 'bold',
    },
    recordText: {
        fontSize: 16,  
        color: colors.textSecondary,
        marginTop: 4,
        fontWeight: '500',
        textAlign: 'center',
    },
});
export default MatchDetailScreen;