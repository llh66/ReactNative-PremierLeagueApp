import { useContext, useEffect, useState } from "react"
import { StateContext } from "../utils/StateContext"
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import globalStyles, { colors } from "../styles/globalStyles";
import { Dropdown } from "react-native-element-dropdown";
import Icon from 'react-native-vector-icons/FontAwesome';
import { updateFavoriteTeam } from "../utils/FirebaseDBHelper";

const ProfileScreen = () => {
    const {teams, user, favoriteTeam, setFavoriteTeam} = useContext(StateContext);
    const [selectedTeam, setSelectedTeam] = useState(favoriteTeam === "null" ? null : favoriteTeam);

    useEffect(() => {
        setSelectedTeam(favoriteTeam);
    }, [favoriteTeam]);

    const dropdownItems = teams.map(item => ({
        label: item.team.name,
        value: item.team.id,
        image: item.team.logos[0].href
    }));

    const renderItem = (item) => (
        <View style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.itemImage}/>
            <Text style={styles.itemText}>{item.label}</Text>
        </View>
    )

    const handleSave = () => {
        
        if (selectedTeam) {
            try {
                updateFavoriteTeam(user.email, selectedTeam);
                setFavoriteTeam(selectedTeam)
                Alert.alert("Favorite team set");
            } catch (error) {
                console.log(error);
            }
        } else {
            Alert.alert("Please pick a team");
        }
    }

    return (
        <View style={[globalStyles.container, styles.container]}>
            <Icon name="user-circle-o" color={'black'} size={100}/>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.inputTitle}>Favorite Team</Text>
            <Dropdown
                style={styles.dropdown}
                data={dropdownItems}
                labelField="label"
                valueField="value"
                value={selectedTeam}
                onChange={(item) => setSelectedTeam(item.value)}
                renderItem={renderItem}
                placeholder="Select supported team"
            />
            <TouchableOpacity 
                style={globalStyles.button}
                onPress={handleSave}
            >
                <Text style={globalStyles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10
    },
    email: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 12
    },
    inputTitle: {
        width: '90%',
        alignContent: 'flex-start'
    },
    dropdown: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        margin: 12,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 8,
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    itemImage: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    itemText: {
        fontSize: 16,
    },
  });

export default ProfileScreen;