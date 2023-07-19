import { View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home/Home";
import BookMark from "./BookMark/BookMark";
const Tab = createBottomTabNavigator();
export default function DashBoard(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="BookMark" component={BookMark}  options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}