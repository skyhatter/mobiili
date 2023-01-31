import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size}) => {

    let iconName;
    if (route.name === 'Home') {
      iconName = 'md-home';
    } else if (route.name === 'Settings') {
      iconName = 'md-settings';
    }
  

  return <Ionicons name={iconName} size={size} color={color} />;
  },
  headerShown: false,
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home"component={HomeScreen} />
        <Tab.Screen name="Settings"component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
