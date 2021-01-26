import React, { useState } from "react";
import {
    View,
    Text,
    Animated,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from "./styles"

const Loading = (props) => {
    const [rotate, setRotate] = useState(new Animated.Value(0))

    Animated.timing(rotate, {
        toValue: 3600,
        duration: 4000,
        useNativeDriver: true,
    }).start();

    const rotateInterpolate = rotate.interpolate({
        inputRange: [0, 360],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <View style={[styles(props).container]}>
            <View style={[styles(props).containerModal]}>
                <Text style={[styles(props).tittle]}>{"Carregando"}</Text>

                <View style={[styles(props).containerIcon]}>
                    <Text style={[styles(props).subtittle]}>{"Aguarde"}</Text>

                    <Animated.View style={[styles({ rotate: rotateInterpolate }).containerAnimation]}>
                        <Icon
                            name="cached"
                            size={40}
                            color="#0A0"
                        />
                    </Animated.View>
                </View>
            </View>
        </View>
    );
}

export default Loading;
