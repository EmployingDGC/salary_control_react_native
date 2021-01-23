import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "../Screens/Main";

const TabComponent = createBottomTabNavigator();

class Tab extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <TabComponent.Navigator
                initialRouteName={this.props.initialRouteName}
                tabBarOptions={this.props.style}
            >
                <TabComponent.Screen name="Main" component={Main} />
            </TabComponent.Navigator>
        )
    };
}

export default Tab;
