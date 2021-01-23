import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Main from "../Screens/Main";

const TabComponent = createBottomTabNavigator();

const paramsMain = {
    bricklayers: [
        {
            name: "Davi Guizani Carvalho",
            ddd: "27",
            tel: "99794-2740",
            dailySalary: 524.45,
            pendingAmount: 10,
            workedDays: [
                {
                    date: "23/01/2021",
                    isPaidOut: false
                },
            ],
        },
        {
            name: "Mayane de Freitas Pereira Viana",
            ddd: "27",
            tel: "99628-3948",
            dailySalary: 200.45,
            pendingAmount: 3,
            workedDays: [
                {
                    date: "23/01/2021",
                    isPaidOut: false
                },
            ],
        },
    ],
}

class Tab extends React.Component {
    render() {
        return (
            <TabComponent.Navigator
                initialRouteName={this.props.initialRouteName}
                tabBarOptions={this.props.style}
            >
                <TabComponent.Screen
                    name="Main" component={Main}
                    initialParams={paramsMain} 
                />
            </TabComponent.Navigator>
        )
    };
}

export default Tab;
