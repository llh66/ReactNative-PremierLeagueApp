import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WatchlistScreen() {
    return (
        <View style={styles.container}>
<Text style={styles.text}>Your Watchlist is Empty</Text>

        </View>
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
