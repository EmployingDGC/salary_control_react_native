import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

// import commonStyles from "../../../commonStyles";
import styles from "./styles"

const Profile = (props) => {
    return (
        <View style={[styles(props).container]}>
            <View style={[styles(props).containerModal]}>
                <View style={[styles(props).containerHeader]}>
                    <Text style={[styles(props).textHeader]}>{props.bricklayer.name}</Text>
                </View>

                <View style={[styles(props).containerMain]}>

                </View>

                <View style={[styles(props).containerFooter]}>
                    <TouchableOpacity
                        onPress={props.onCloseModal}
                        activeOpacity={.5}
                    >
                        <Icon
                            name="times-circle-o"
                            size={40}
                            color="#A00"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={props.onUpdateModal}
                        activeOpacity={.5}
                    >
                        <Icon
                            name="check-circle-o"
                            size={40}
                            color="#0A0"
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Profile;
