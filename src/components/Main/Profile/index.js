import React from "react";
import {
    View,
    Text,
    Alert,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import { dateFormated } from "../../../commonFunctions";

import commonStyles from "../../../commonStyles";
import styles from "./styles"

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pendingAmount: this.props.bricklayer.pendingAmount,
            workedDays: [...this.props.bricklayer.workedDays],
        }
        
        this.auxBricklayer = {
            id: this.props.bricklayer.id,
            name: this.props.bricklayer.name,
            ddd: this.props.bricklayer.ddd,
            tel: this.props.bricklayer.tel,
            dailySalary: this.props.bricklayer.dailySalary,
        }
    }

    getAmount = () => {
        return this.state.pendingAmount * this.auxBricklayer.dailySalary;
    }

    onTogglePaid = (pos) => {
        const bricklayer = { ...this.state };

        if (bricklayer.workedDays[pos].isPaidOut) {
            if (!this.props.isRoot) {
                this.props.onToggleModalAuth();
                return;
            }
            
            bricklayer.pendingAmount += 1;
        }
        else {
            bricklayer.pendingAmount -= 1;
        }

        bricklayer.workedDays[pos].isPaidOut = !bricklayer.workedDays[pos].isPaidOut;


        this.setState({
            pendingAmount: bricklayer.pendingAmount,
            workedDays: bricklayer.workedDays,
        });
    }

    onConfirm = () => {
        const bricklayer = {
            ...this.state,
            ...this.auxBricklayer,
        }

        this.props.onCloseModal(bricklayer);
    }

    renderWorkedDays = (workedDays = []) => {
        const listworkedDays = [];
        
        for (let i = 0; i < workedDays.length; i++) {
            const element = workedDays[i];
            
            listworkedDays.push(
                <View style={[
                    styles(this.props).containerDate,
                    i === 0 ? {marginTop: 15} : null,
                    i === workedDays.length - 1 ? {marginBottom: 15} : null,
                ]} key={`Profile ${i}`}>
                    <Text style={[styles(this.props).textDate]}>{element.date}</Text>

                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={() => this.onTogglePaid(i)}
                    >
                        <IconMaterialIcons
                            name="attach-money"
                            size={40}
                            color={element.isPaidOut ? "#0F0" : "#F00"}
                        />
                    </TouchableOpacity>
                </View>
            );
        }
        
        return listworkedDays;
    }

    addDay = () => {
        const workedDays = [ ...this.state.workedDays ];
        const pendingAmount = this.state.pendingAmount + 1;
        const date = dateFormated();

        const newWorkedDay = {
            date,
            isPaidOut: false,
        }

        for (let i = 0; i < workedDays.length; i++) {
            const element = workedDays[i];
            
            if (date.includes(element.date)) {
                Alert.alert("Erro", `O funcionário ${this.auxBricklayer.name} já bateu o ponto de hoje.`)

                return;
            }
        }

        workedDays.unshift(newWorkedDay);

        this.setState({
            workedDays,
            pendingAmount,
        });
    }

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <View style={[styles(this.props).containerModal]}>
                    <View style={[styles(this.props).containerHeader]}>
                        <Text style={[styles(this.props).textHeader]}>{this.auxBricklayer.name}</Text>
                    </View>

                    <View style={[styles(this.props).containerMain]}>
                        <View style={[styles(this.props).containerTel]}>
                            <Text style={[styles(this.props).subtittleText]}>Tel:</Text>

                            <Text style={[styles(this.props).contentText]}>{this.auxBricklayer.ddd}</Text>

                            <Text style={[styles(this.props).contentText]}>{this.auxBricklayer.tel}</Text>
                        </View>

                        <ScrollView style={[styles(this.props).containerScroll]}>
                            <View style={[
                                styles(this.props).containerButtonAddDay,
                                {
                                    marginBottom: this.state.workedDays.length === 0 ? 15 : 0,
                                }
                            ]}>
                                <TouchableOpacity
                                    activeOpacity={.5}
                                    onPress={() => this.addDay()}
                                >
                                    <IconFontAwesome
                                        name="calendar-plus-o"
                                        size={45}
                                        color={commonStyles.colors.primary.dark}
                                    />
                                </TouchableOpacity>
                            </View>
                            {this.renderWorkedDays(this.state.workedDays)}
                        </ScrollView>
                        <Text style={[
                            styles(this.props).textDate,
                            styles(this.props).textAmount,
                            {
                                color: this.getAmount() === 0 ? "#0A0" : "#F00"
                            }
                        ]}>{`Falta pagar: R$ ${this.getAmount().toFixed(2)}`}</Text>
                    </View>

                    <View style={[styles(this.props).containerFooter]}>
                        <TouchableOpacity
                            style={[styles(this.props).buttonConfirm]}
                            onPress={() => this.onConfirm()}
                            activeOpacity={.5}
                        >
                            <IconFontAwesome
                                name="check"
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

export default Profile;

