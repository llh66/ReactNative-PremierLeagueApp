import { NavigationContainer } from '@react-navigation/native';
import { PLDataProvider } from './utils/PLDataContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AuthenticationStack from './navigation/AuthenticationStack';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <PLDataProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Tab.Screen
                        name='Authentication'
                        component={AuthenticationStack}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </PLDataProvider>
    );
}
