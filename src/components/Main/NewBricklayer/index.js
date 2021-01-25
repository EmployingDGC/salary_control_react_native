import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles"

class NewBricklayer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textName: "",
            textDDD: "",
            textTel: "",
            textDailySalary: "",
        }

        this.newBricklayer = {
            name: "",
            ddd: "",
            tel: "",
            id: props.id,
            dailySalary: 0,
            pendingAmount: 0,
            workedDays: [],
        }
    }

    onChangeDailySalary = (textDailySalary) => {
        const textLength = textDailySalary.length;
        const allowed = "0123456789.";
        const char = textDailySalary[textLength - 1] || "";

        if (textLength === 1  && char === "0") {
            return;
        }

        if (textLength != 0 && !allowed.includes(char)) {
            return;
        }

        this.newBricklayer.dailySalary = parseFloat(textDailySalary);

        this.setState({
            textDailySalary,
        });
    }
    
    onChangeDDD = (textDDD) => {
        const textLength = textDDD.length;
        const allowed = "0123456789";
        const char = textDDD[textLength - 1] || "";

        if (textLength === 1  && char === "0") {
            return;
        }

        if (textLength != 0 && !allowed.includes(char)) {
            return;
        }

        this.newBricklayer.ddd = textDDD;

        this.setState({
            textDDD,
        });
    }
    
    onChangeTel = (textTel) => {
        const textLength = textTel.length;
        const allowed = "0123456789-";
        const char = textTel[textLength - 1] || "";

        if (textLength === 1  && char === "0") {
            return;
        }

        if (textLength != 0 && !allowed.includes(char)) {
            return;
        }

        this.newBricklayer.tel = textTel;

        this.setState({
            textTel,
        });
    }
    
    onChangeName = (textName) => {
        this.newBricklayer.name = textName.trim();

        this.setState({
            textName,
        });
    }

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <View style={[styles(this.props).containerModal]}>
                    <Text style={[styles(this.props).tittle]}>{"Novo Funcionário"}</Text>
                    <View style={[styles(this.props).boxContainer]}>
                        <Text style={[styles(this.props).subtittle]}>{"Nome:"}</Text>
                        <View style={[
                            styles(this.props).inputContainer,
                            styles(this.props).marginLeft10,
                            styles(this.props).flex1,
                        ]}>
                            <TextInput
                                style={[styles(this.props).inputContent]}
                                placeholder="Nome ..."
                                autoCapitalize="words"
                                value={this.state.textName}
                                onChangeText={(name) => this.onChangeName(name)}
                            />
                        </View>
                    </View>

                    <View style={[styles(this.props).boxContainer]}>
                        <Text style={[styles(this.props).subtittle]}>{"Tel:"}</Text>
                        <View style={[
                            styles(this.props).inputContainer,
                            styles(this.props).marginHorizontal10,
                        ]}>
                            <TextInput
                                style={[styles(this.props).inputContent]}
                                placeholder="DDD"
                                maxLength={2}
                                keyboardType="numeric"
                                value={this.state.textDDD}
                                onChangeText={(DDD) => this.onChangeDDD(DDD)}
                            />
                        </View>
                        <View
                            style={[
                                styles(this.props).inputContainer,
                                styles(this.props).flex1,
                            ]}>
                            <TextInput
                                style={[styles(this.props).inputContent]}
                                placeholder="Número ..."
                                maxLength={10}
                                keyboardType="number-pad"
                                value={this.state.textTel}
                                onChangeText={(tel) => this.onChangeTel(tel)}
                            />
                        </View>
                    </View>

                    <View style={[styles(this.props).boxContainer]}>
                        <Text style={[styles(this.props).subtittle]}>{"Diária:"}</Text>
                        <View style={[
                            styles(this.props).inputContainer,
                            styles(this.props).marginLeft10,
                            styles(this.props).flex1,
                        ]}>
                            <TextInput
                                style={[styles(this.props).inputContent]}
                                placeholder="Valor da Diária ..."
                                maxLength={6}
                                keyboardType="numeric"
                                value={this.state.textDailySalary}
                                onChangeText={(ds) => this.onChangeDailySalary(ds)}
                            />
                        </View>
                    </View>

                    <View style={[styles(this.props).buttonsContainer]}>
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
                            onPress={() => this.props.onConfirmModal(this.newBricklayer)}
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

export default NewBricklayer;

