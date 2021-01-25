import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "./styles"

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bricklayer: {
                name: this.props.bricklayer.name,
                ddd: this.props.bricklayer.ddd,
                tel: this.props.bricklayer.tel,
                pendingAmount: this.props.bricklayer.pendingAmount,
                dailySalary: this.props.bricklayer.dailySalary,
                workedDays: [...this.props.bricklayer.workedDays],
            },
        }
    }

    getAmount = () => {
        return this.state.bricklayer.pendingAmount * this.state.bricklayer.dailySalary;
    }

    onUpdatePaid = (pos) => {
        const currentBricklayer = { ...this.state.bricklayer };

        currentBricklayer.workedDays[pos].isPaidOut = true;

        currentBricklayer.pendingAmount -= 1;

        this.setState({
            bricklayer: currentBricklayer,
        });
    }

    renderWorkedDays = (workedDays = []) => {
        const listworkedDays = [];
    console.log(workedDays);
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
                        onPress={() => this.onUpdatePaid(i)}
                        disabled={element.isPaidOut}
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

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <View style={[styles(this.props).containerModal]}>
                    <View style={[styles(this.props).containerHeader]}>
                        <Text style={[styles(this.props).textHeader]}>{this.state.bricklayer.name}</Text>
                    </View>

                    <View style={[styles(this.props).containerMain]}>
                        <View style={[styles(this.props).containerTel]}>
                            <Text style={[styles(this.props).subtittleText]}>Tel:</Text>

                            <Text style={[styles(this.props).contentText]}>{this.state.bricklayer.ddd}</Text>

                            <Text style={[styles(this.props).contentText]}>{this.state.bricklayer.tel}</Text>
                        </View>

                        <ScrollView style={[styles(this.props).containerScroll]}>
                            {this.renderWorkedDays(this.state.bricklayer.workedDays)}

                            <Text style={[
                                styles(this.props).textDate,
                                styles(this.props).textAmount,
                                {
                                    color: this.getAmount() === 0 ? "#0A0" : "#F00"
                                }
                            ]}>{`Falta pagar: R$ ${this.getAmount().toFixed(2)}`}</Text>
                        </ScrollView>
                    </View>

                    <View style={[styles(this.props).containerFooter]}>
                        <TouchableOpacity
                            onPress={() => this.props.onCloseModal()}
                            activeOpacity={.5}
                        >
                            <IconFontAwesome
                                name="times-circle-o"
                                size={40}
                                color="#A00"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {}}
                            activeOpacity={.5}
                        >
                            <IconFontAwesome
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

export default Profile;

