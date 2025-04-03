import React, { useRef } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import globalStyles from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const MatchFlatList = ({ navigation, data }) => {
    const flatListRef = useRef(null);
    const scrollToTop = () => {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    };
    const formatMatchDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit', 
            minute: '2-digit'
        };
        return date.toLocaleDateString('en-US', options);
    };

    const renderItem = ({ item }) => {
        const homeTeam = item.competitions[0]?.competitors[0]?.team;
        const awayTeam = item.competitions[0]?.competitors[1]?.team;
        const matchDate = formatMatchDate(item.date);

        return (
            <TouchableOpacity
                style={styles.matchCard}
                onPress={() => navigation.navigate('MatchDetail', { match: item })}
            >
                <View style={styles.dateStrip}>
                    <Text style={styles.dateText}>{matchDate}</Text>
                </View>
                
                <View style={styles.teamsContainer}>
                    <View style={styles.teamColumn}>
                        <Image source={{ uri: homeTeam.logo }} style={styles.logo} />
                        <Text style={styles.teamName}>{homeTeam.displayName}</Text>
                    </View>
                    
                    <View style={styles.vsContainer}>
                        <Text style={styles.vsText}>VS</Text>
                        <Text style={styles.venueText}>
                            {item.competitions[0]?.venue?.fullName || ""}
                        </Text>
                    </View>
                    
                    <View style={styles.teamColumn}>
                        <Image source={{ uri: awayTeam.logo }} style={styles.logo} />
                        <Text style={styles.teamName}>{awayTeam.displayName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={globalStyles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
            <TouchableOpacity
                onPress={scrollToTop}
                style={styles.buttonToTop}
            >
                <Icon
                    name='arrow-circle-up'
                    color={colors.secondary}
                    size={60}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 12,
    },
    matchCard: {
        backgroundColor: colors.white,
        borderRadius: 8,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    dateStrip: {
        backgroundColor: colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    dateText: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 14,
    },
    teamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    teamColumn: {
        alignItems: 'center',
        width: '35%',
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 8,
    },
    teamName: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.text,
    },
    vsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
    },
    vsText: {
        fontSize: 16,  
        fontWeight: 'bold',
        color: colors.accent,
        marginBottom: 8,
    },
    venueText: {
        fontSize: 12,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    buttonToTop: {
        position: 'absolute',
        bottom: 12,
        right: 12
    }
});

export default MatchFlatList;