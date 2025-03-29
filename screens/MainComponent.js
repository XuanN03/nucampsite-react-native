//import { useState } from "react";
//import { CAMPSITES } from "../shared/campsites";
import DirectoryScreen from "./DirectoryScreen";
import { View } from "react-native";
import CampsiteInfoScreen from "./CampsiteInfoScreen";
import { Platform } from "react-native";
import Constants from 'expo-constants';
import { createStackNavigator } from "@react-navigation/stack";

const DirectoryNavigatory = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName="Directory" 
            screenOptions={{ 
                headerStyle: { 
                    backgroundColor: '#5637DD' 
                }, 
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen 
                name="Directory"
                component={DirectoryScreen}
                options={{title: 'Campsite Directory'}}
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
            <DirectoryNavigatory />
        </View>
    )
}

export default Main;