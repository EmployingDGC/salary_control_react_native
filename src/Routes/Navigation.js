import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../Screens/Main";

const StackComponent = createStackNavigator();

class Stack extends React.Component {
    render() {
        return (
            <StackComponent.Navigator initialRouteName={this.props.initialRouteName}>
                <StackComponent.Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false,
                    }}
                />
            </StackComponent.Navigator>
        )
    };
}

export default Stack;
