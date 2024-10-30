import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Notifications from '../screens/HomeStack/Notifications';
import HomeDetailsScreen from '../screens/HomeStack/HomeDetailsScreen';
import NotificationDetails from '../screens/HomeStack/NotificationDetails';
import Helps from '../screens/HomeStack/Helps';
import BottomNavigation from './BottomNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



const HomeDrawer = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={BottomNavigation} 
            options={{
                drawerIcon: ({ color }) => (
                    <Icon name="home" size={24} color={color} />
                ),
            }}/>
            <Drawer.Screen name='Notifications' component={Notifications} 
            options={{
                drawerIcon: ({ color }) => (
                    <Icon name="bell" size={24} color={color} />
                ),
            }}/>
            <Drawer.Screen name='Helps' component={Helps} 
            options={{
                drawerIcon: ({ color }) => (
                    <Icon name="question" size={24} color={color} />
                ),
            }}/>
        </Drawer.Navigator>
    )
}

export default HomeStack = () => {
    
    return (
        <Stack.Navigator >
            <Stack.Screen name='Drawer' component={HomeDrawer} options={{headerShown: false}}/>
            <Stack.Screen name='HomeDetailsScreen' component={HomeDetailsScreen}/>
            <Stack.Screen name='NotificationDetailsScreen' component={NotificationDetails}/>
        </Stack.Navigator> 
    )
}