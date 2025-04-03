import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import globalStyles from "../styles/globalStyles";

const NoFavoriteTeamScreen = ({navigation}) => {
    const handleGoToProfile = () => {
        navigation.navigate("Profile");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You may set a favorite team in Profile, authentication may be required</Text>
            <TouchableOpacity
                style={globalStyles.button}
                onPress={handleGoToProfile}
            >
                <Text style={globalStyles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12
    },
    text: {
        fontSize: 18,
        margin: 12
    }
})

export default NoFavoriteTeamScreen