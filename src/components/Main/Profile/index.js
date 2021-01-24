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

const Profile = (props) => {

    getAmount = () => {
        return props.bricklayer.pendingAmount * props.bricklayer.dailySalary;
    }

    renderWorkedDays = (workedDays = [], bricklayer) => {
        const listworkedDays = [];
    
        for (let i = 0; i < workedDays.length; i++) {
            const element = workedDays[i];
            
            listworkedDays.push(
                <View style={[
                    styles(props).containerDate,
                    i === 0 ? {marginTop: 15} : null,
                    i === workedDays.length - 1 ? {marginBottom: 15} : null,
                ]} key={i}>
                    <Text style={[styles(props).textDate]}>{element.date}</Text>

                    <TouchableOpacity
                        activeOpacity={.5}
                        onPress={() => props.onUpdatePaid(i)}
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

    return (

        <View style={[styles(props).container]}>
            <View style={[styles(props).containerModal]}>
                <View style={[styles(props).containerHeader]}>
                    <Text style={[styles(props).textHeader]}>{props.bricklayer.name}</Text>
                </View>

                <View style={[styles(props).containerMain]}>
                    <View style={[styles(props).containerTel]}>
                        <Text style={[styles(props).subtittleText]}>Tel:</Text>

                        <Text style={[styles(props).contentText]}>{props.bricklayer.ddd}</Text>

                        <Text style={[styles(props).contentText]}>{props.bricklayer.tel}</Text>
                    </View>

                    <ScrollView style={[styles(props).containerScroll]}>
                        {renderWorkedDays(props.bricklayer.workedDays, props.bricklayer)}

                        <Text style={[
                            styles(props).textDate,
                            styles(props).textAmount,
                            {
                                color: getAmount() === 0 ? "#0A0" : "#F00"
                            }
                        ]}>{`Falta pagar: R$ ${getAmount().toFixed(2)}`}</Text>
                    </ScrollView>
                </View>

                <View style={[styles(props).containerFooter]}>
                    <TouchableOpacity
                        onPress={() => props.onCloseModal()}
                        activeOpacity={.5}
                    >
                        <IconFontAwesome
                            name="times-circle-o"
                            size={40}
                            color="#A00"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => props.onUpdateModal(props.bricklayer)}
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
    );
}

export default Profile;
