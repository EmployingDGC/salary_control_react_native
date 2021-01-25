import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Navigation from "./Navigation";

import styles from "./styles";

class Routes extends React.Component {
    render() {
        return (
            <View style={[styles().container]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#000000"
                />

                <NavigationContainer>
                    <Navigation initialRouteName="Main"/>
                </NavigationContainer>
            </View>
        )
    };
}

export default Routes;
