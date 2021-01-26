import React from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class Auth extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
        }
    }

    onChangeTextPassword = (password) => {
        this.setState({
            password,
        });
    }

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <View style={[styles(this.props).containerModal]}>
                    <Text style={[styles(this.props).tittle]}>{"Digite a Senha do Admin"}</Text>

                    <View style={[styles(this.props).containerInput]}>
                        <TextInput
                            style={[styles(this.props).textInput]}
                            placeholder="Senha ..."
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={(password) => this.onChangeTextPassword(password)}
                        />
                    </View>

                    <View style={[styles(this.props).containerButtons]}>
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={() => this.props.onCloseModal()}
                        >
                            <Icon
                                name="times-circle-o"
                                size={40}
                                color="#A00"
                                />
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={() => {
                                this.props.onConfirmPassword(this.state.password);
                                this.props.onCloseModal();
                            }}
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
        )
    };
}

export default Auth;
