import React, { useContext } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import globalStyles from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import { StyleSheet } from 'react-native';
import { StateContext } from '../utils/StateContext';
import MatchFlatList from '../components/MatchFlatList';


const UpcomingMatchesScreen = ({ navigation }) => {
    const { scoreboard } = useContext(StateContext);

    const matches = scoreboard?.data?.events || [];

    return (
        <MatchFlatList
            data={matches}
            navigation={navigation}
        />
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
    }
});
export default UpcomingMatchesScreen;