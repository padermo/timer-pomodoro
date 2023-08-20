import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icon
import { MaterialCommunityIcons } from '@expo/vector-icons';

// utils
import { colors, backgrounds } from '../utils/colors'

// screens
import Break from '../components/Break';
import Study from '../components/Study';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
    initialRoutName='Study'
    screenOptions={({route})=>({
      tabBarStyle: {borderTopWidth: 0, elevation: 0, backgroundColor: route.name === 'Study' ? colors.pink : colors.green},
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#999999',
    })}
    >
      <Tab.Screen name="Study" component={Study} options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="alarm" size={size} color={color} />
        ),
        headerStyle: backgrounds.pink,
        headerTitleStyle: {color: '#fff', fontSize: 40},
        headerShown: true,
      }} />
      <Tab.Screen name="Break" component={Break} options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="cookie-clock-outline" size={size} color={color} />
        ),
        headerStyle: backgrounds.green,
        headerTitleStyle: {color: '#fff', fontSize: 40},
        headerShown: true,
      }} />
    </Tab.Navigator>
  )
}

export default TabNav