import React from "react";
import {
    View,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import Bricklayers from "../../components/Main/Bricklayers";
import Profile from "../../components/Main/Profile";
import NewBricklayer from "../../components/Main/NewBricklayer";

import banner from "../../../assets/images/banner.fw.png";

import commonStyles from "../../commonStyles";
import styles from "./styles";

const paramsMain = {
    bricklayers: [
        {
            name: "Davi Guizani Carvalho",
            ddd: "27",
            tel: "99794-2740",
            id: 0,
            dailySalary: 120.249,
            pendingAmount: 4,
            workedDays: [
                {
                    date: "25/05/2020",
                    isPaidOut: false,
                },
                {
                    date: "26/05/2020",
                    isPaidOut: false,
                },
                {
                    date: "27/05/2020",
                    isPaidOut: false,
                },
                {
                    date: "28/05/2020",
                    isPaidOut: false,
                },
            ],
        },
        {
            name: "Mayane de Freitas Pereira Viana",
            ddd: "27",
            tel: "99794-2740",
            id: 1,
            dailySalary: 150.817,
            pendingAmount: 3,
            workedDays: [
                {
                    date: "16/02/2020",
                    isPaidOut: false,
                },
                {
                    date: "17/02/2020",
                    isPaidOut: false,
                },
                {
                    date: "18/02/2020",
                    isPaidOut: true,
                },
                {
                    date: "19/02/2020",
                    isPaidOut: false,
                },
            ],
        },
    ],
}

const initialState = {
    bricklayers: paramsMain.bricklayers,
    isOpenModalNewBricklayers: false,
    isOpenModalBricklayers: false,
    bricklayersIdModal: 0,
};

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
        }
    }

    onCloseModalNewBricklayers = () => {
        this.setState({
            isOpenModalNewBricklayers: false,
        });
    }

    onOpenModalNewBricklayers = () => {
        this.setState({
            isOpenModalNewBricklayers: true,
        });
    }

    onConfirmModalNewBricklayers = (newBricklayer) => {
        const invalidInformation = {
            name: !newBricklayer.name ? true : false,
            ddd: !newBricklayer.ddd || newBricklayer.ddd.length < 2 ? true : false,
            tel: !newBricklayer.tel || newBricklayer.tel.length < 8 ? true : false,
            dailySalary: newBricklayer.dailySalary === 0 ? true : false,
        };

        if (invalidInformation.name || invalidInformation.ddd || invalidInformation.tel || invalidInformation.dailySalary) {
            Alert.alert(
                "Dados Inválidos!",
                `Corrija as informações abaixo e tente novamente.\n\n` +
                `${invalidInformation.name ? "Nome\n" : ""}` +
                `${invalidInformation.ddd ? "DDD\n" : ""}` +
                `${invalidInformation.tel ? "Número de Telefone\n" : ""}` +
                `${invalidInformation.dailySalary ? "Valor da Diária" : ""}`,
            );

            return;
        }

        const bricklayers = [ ...this.state.bricklayers ];

        bricklayers.push(newBricklayer);

        this.setState({
            bricklayers,
        });

        this.onCloseModalNewBricklayers();
    }

    onOpenModalBricklayers = (id) => {
        this.setState({
            isOpenModalBricklayers: true,
            bricklayersIdModal: id,
        });
    }

    onCloseModalBricklayers = (bricklayer) => {
        const bricklayers = [ ...this.state.bricklayers ];
        const id = bricklayer.id;

        bricklayers[id] = { ...bricklayer }

        this.setState({
            bricklayers,
            isOpenModalBricklayers: initialState.isOpenModalBricklayers,
            bricklayersIdModal: initialState.bricklayersIdModal,
        });
    }

    renderBricklayers = (bricklayers = []) => {
        const list_bricklayer = [];

        for (let i = 0; i < bricklayers.length; i++) {
            const element = bricklayers[i];
            
            list_bricklayer.push(
                <Bricklayers
                    key={`Bricklayers ${i}`}
                    name={element.name}
                    dailySalary={element.dailySalary}
                    workedDays={element.workedDays.length}
                    onPress={() => this.onOpenModalBricklayers(i)}
                />
            );
        }

        return list_bricklayer;
    }

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <Modal
                    visible={this.state.isOpenModalBricklayers}
                    transparent={true}
                    animationType="slide"
                >
                    <Profile
                        bricklayer={{...this.state.bricklayers[this.state.bricklayersIdModal]}}
                        onCloseModal={this.onCloseModalBricklayers}
                    />
                </Modal>

                <Modal
                    visible={this.state.isOpenModalNewBricklayers}
                    transparent={true}
                    animationType="slide"
                >
                    <NewBricklayer
                        onCloseModal={this.onCloseModalNewBricklayers}
                        onConfirmModal={this.onConfirmModalNewBricklayers}
                        id={this.state.bricklayers.length}
                    />
                </Modal>

                <View style={[styles(this.props).containerBanner]}>
                    <ImageBackground style={[styles(this.props).banner]} source={banner}>
                        <TouchableOpacity
                            onPress={this.onOpenModalNewBricklayers}
                            style={styles({ size: 60 }).buttonAdd}
                            activeOpacity={.7}
                        >
                            <Icon
                                name="user-plus"
                                size={40}
                                color={commonStyles.colors.secundary.light}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>

                <ScrollView style={[styles(this.props).containerBricklayer]}>
                    {this.renderBricklayers(this.state.bricklayers)}
                </ScrollView>
            </View>
        )
    };
}

export default Main;
