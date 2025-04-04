import * as Location from 'expo-location';
import { Alert } from 'react-native';

export const getStadiumCoordinates = async (venue) => {
    try {
        
        // Validate venue data
        if (!venue?.address?.city || !venue.fullName) {
        Alert.alert('Location Error', 'Incomplete venue information');
        return null;
        }

        // Request permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        Alert.alert('Permission Required', 'Location access needed for stadium maps');
        return null;
        }

        // Try structured city + country geocoding first
        const geoResult = await Location.geocodeAsync(
        `${venue.fullName}, ${venue.address.city}, UK`
        );

        return geoResult[0] ? {
        latitude: geoResult[0].latitude,
        longitude: geoResult[0].longitude,
        } : null;

    } catch (error) {
        Alert.alert('Location Error', 'Failed to retrieve stadium location');
        return null;
    }
};
