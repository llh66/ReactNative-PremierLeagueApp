import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MatchFlatList from '../components/MatchFlatList';
import { StateContext } from '../utils/StateContext';


const FavoriteTeamScreen = ({navigation}) => {
    const { scoreboard, favoriteTeam } = useContext(StateContext);

    const favoriteTeamMatches = scoreboard.data.events.filter(
        (match) => (match.competitions[0].competitors[0].team.id === favoriteTeam) || (match.competitions[0].competitors[1].team.id === favoriteTeam)
    );

    return (
        <MatchFlatList
            data={favoriteTeamMatches}
            navigation={navigation}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#555',
    },
});

export default FavoriteTeamScreen;