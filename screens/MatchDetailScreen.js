import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import globalStyles from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import { StyleSheet } from "react-native";

export default function MatchDetailScreen({ route, navigation }) {
    const { match } = route.params;

    // Extract home and away teams
    const homeTeam = match.competitions[0]?.competitors[0];
    const awayTeam = match.competitions[0]?.competitors[1];

    // Extract venue and date
    const venue = match.competitions[0]?.venue?.fullName;
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

    // Extract top goal scorers for both teams
    const homeTopScorer = homeTeam?.leaders?.[0]?.leaders?.[0]?.athlete || null;
    const homeTopScorerGoals =
        homeTeam?.leaders?.[0]?.leaders?.[0]?.displayValue || "N/A";

    const awayTopScorer = awayTeam?.leaders?.[0]?.leaders?.[0]?.athlete || null;
    const awayTopScorerGoals =
        awayTeam?.leaders?.[0]?.leaders?.[0]?.displayValue || "N/A";

    return (
        <View style={[globalStyles.container, styles.contentPadding]}>
            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate("MainTabs")}
            >
                <Icon name="arrow-left" size={20} color={colors.primary} />
                <Text style={styles.backButtonText}>Back to Matches</Text>
            </TouchableOpacity>

            {/* Match Header */}
            <View style={styles.header}>
                <Text style={styles.title}>
                    {homeTeam?.team?.displayName} vs {awayTeam?.team?.displayName}
                </Text>
                <Text style={styles.date}>
                    {formattedDate} | {formattedTime}
                </Text>
            </View>

            {/* Team Logos and Top Scorers */}
            <View style={styles.teamsContainer}>
                {/* Home Team */}
                <View style={styles.teamContainer}>
                    <Image
                        source={{ uri: homeTeam?.team?.logo }}
                        style={styles.logo}
                    />
                    <Text style={styles.teamName}>{homeTeam?.team?.displayName}</Text>
                    <Text style={styles.scorerName}>
                        Top Scorer: {homeTopScorer?.displayName || "N/A"}
                    </Text>
                    <Text style={styles.scorerGoals}>{homeTopScorerGoals} goals</Text>
                </View>

                {/* VS Text */}
                <Text style={styles.vsText}>VS</Text>

                {/* Away Team */}
                <View style={styles.teamContainer}>
                    <Image
                        source={{ uri: awayTeam?.team?.logo }}
                        style={styles.logo}
                    />
                    <Text style={styles.teamName}>{awayTeam?.team?.displayName}</Text>
                    <Text style={styles.scorerName}>
                        Top Scorer: {awayTopScorer?.displayName || "N/A"}
                    </Text>
                    <Text style={styles.scorerGoals}>{awayTopScorerGoals} goals</Text>
                </View>
            </View>

            {/* Match Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.detail}>Venue: {venue || "N/A"}</Text>
            </View>

            {/* Add to Watchlist Button */}
            <TouchableOpacity style={styles.watchlistButton}>
                <Icon name="plus" size={16} color="#FFFFFF" />
                <Text style={styles.watchlistButtonText}> Add to Watchlist</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contentPadding: {
        marginTop: 40,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    backButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.primary,
        marginLeft: 8,
    },
    header: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 30,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.white,
        textAlign: "center",
    },
    date: {
        fontSize: 14,
        color: colors.white,
        textAlign: "center",
        marginTop: 8,
    },
    teamsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 40,
    },
    teamContainer: {
        alignItems: "center",
        width: "40%",
    },
    logo: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    teamName: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.text,
    },
    scorerName: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: colors.textSecondary,
    },
    scorerGoals: {
        fontSize: 14,
        textAlign: "center",
        marginTop: 2,
        color: colors.textSecondary,
    },
    vsText: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.accent,
    },
    detailsContainer: {
        backgroundColor: colors.white,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        elevation: 3,
        marginBottom: 20,
        alignSelf: "center",
        width: "80%",
    },
    detail: {
        fontSize: 16,
        color: "black",
        fontWeight: "500",
        textAlign: "center",
    },
    watchlistButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        elevation: 3,
        alignSelf: "center",
        width: "60%",
    },
    watchlistButtonText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        marginLeft: 8,
    },
});
