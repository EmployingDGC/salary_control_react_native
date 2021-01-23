import React from "react";
import {
    View,
    Text,
} from "react-native";

import styles from "./styles";

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // umaPropriedade: this.props.umaPropriedade,
        }
    }

    render() {
        return (
            <View style={[styles().container]}>
                
            </View>
        )
    };
}

export default Main;
