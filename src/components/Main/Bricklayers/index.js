import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import commonStyles from "../../../commonStyles";
import styles from "./styles"

const Bricklayers = (props) => {
    return (
        <View style={[styles(props).container]}>
            <View style={[styles(props).containerProfile]}>
                <TouchableOpacity
                    onPress={props.onPress}
                    activeOpacity={.3}
                >
                    <View style={[styles(props).containerIcon]}>
                        <Icon
                            name="user-o"
                            size={40}
                            color={commonStyles.colors.secundary.light}
                        />
                    </View>
                </TouchableOpacity>
                
                <View style={[styles(props).containerInfo]}>
                    <View style={[styles(props).containerTextInfo]}>
                        <Text style={[styles(props).textInfo]}>{`Diária: R$ ${props.dailySalary}`}</Text>
                        <Text style={[styles(props).textInfo]}>{`Dias Trabalhados: ${props.workedDays}`}</Text>
                    </View>
                </View>
            </View>

            <Text style={[styles(props).textProfile]}>{props.name}</Text>
        </View>
    );
}

export default Bricklayers;
