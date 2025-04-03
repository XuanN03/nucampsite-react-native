//import { useState } from "react";
//import { CAMPSITES } from "../shared/campsites";
import DirectoryScreen from "./DirectoryScreen";
import { View, StyleSheet, Platform } from "react-native";
import {Icon} from 'react-native-elements'
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import Constants from 'expo-constants';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import ContactScreen from "./ContactScreen";

const Drawer = createDrawerNavigator();

const screenOptions =  {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637DD' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={({navigation})=> ({
                    title: 'Home',
                    headerLeft:()=> (
                        <Icon 
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const AboutNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name="About"
                component={AboutScreen}
                options={({navigation})=> ({
                    headerLeft:()=> (
                        <Icon 
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen 
                name="Contact"
                component={ContactScreen}
                options={({navigation})=> ({
                    title: 'Contact Us',
                    headerLeft:()=> (
                        <Icon 
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Directory" 
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name="Directory"
                component={DirectoryScreen}
                options={({navigation})=> ({
                    title: 'Campsite Directory',
                    headerLeft:()=> (
                        <Icon 
                            name='list'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen 
                name="CampsiteInfo"
                component={CampsiteInfoScreen}
                options={({route}) => ({
                    title: route.params.campsite.name
                })}
            />
        </Stack.Navigator>
    )
}

const Main = () => {
    // const [campsites, setCampsites] = useState(CAMPSITES);
    // const [selectedCampsiteId, setSelectedCampsiteId] = useState();

    return (
        <View style={{ 
            flex : 1, 
            paddingTop : Platform.OS === "ios" ? 0 : Constants.statusBarHeight
        }}>
            <Drawer.Navigator
                initialRouteName="HomeNav"
                screenOptions={{
                    drawerStyle: { backgroundColor: "#CEC8FF" },
                    headerShown: true,
                }}
            >
                <Drawer.Screen 
                    name="HomeNav"
                    component={HomeNavigator}
                    options={{
                        title: 'Home',
                        headerShown: false,
                        drawerIcon:({color})=> (
                            <Icon 
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name="DirectoryNav"
                    component={DirectoryNavigator}
                    options={{
                        title: 'Campsite Directory',
                        headerShown: false,
                        drawerIcon:({color})=> (
                            <Icon 
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name="AboutNav"
                    component={AboutNavigator}
                    options={{
                        title: 'About Us',
                        headerShown: false,
                        drawerIcon:({color})=> (
                            <Icon 
                                name='info-circle'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen 
                    name="ContactNav"
                    component={ContactNavigator}
                    options={{
                        title: 'Contact Us',
                        headerShown: false,
                        drawerIcon:({color})=> (
                            <Icon 
                                name='address-card'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    StackIcon:{
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;