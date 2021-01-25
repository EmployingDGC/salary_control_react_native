import React from "react";
import {
    View,
    ScrollView,
    ImageBackground,
    Modal,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Bricklayers from "../../components/Main/Bricklayers";
import Profile from "../../components/Main/Profile";

import banner from "../../../assets/images/banner.fw.png";

import styles from "./styles";

const storageKey = "@bricklayers";

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
                    date: "16/02/1997",
                    isPaidOut: false,
                },
                {
                    date: "16/02/1997",
                    isPaidOut: false,
                },
                {
                    date: "16/02/1997",
                    isPaidOut: false,
                },
                {
                    date: "16/02/1997",
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
                    date: "16/02/1997",
                    isPaidOut: false,
                },
                {
                    date: "16/02/1997",
                    isPaidOut: false,
                },
                {
                    date: "16/02/1997",
                    isPaidOut: true,
                },
                {
                    date: "16/02/1997",
                    isPaidOut: false,
                },
            ],
        },
    ],
}

const initialState = {
    bricklayers: paramsMain.bricklayers,
    isOpenModal: false,
    bricklayersIdModal: null,
};

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
        }
    }

    onOpenModal = (id) => {
        this.setState({
            isOpenModal: true,
            bricklayersIdModal: id,
        });
    }

    onCloseModal = () => {
        this.setState({
            isOpenModal: initialState.isOpenModal,
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
                    onPress={() => this.onOpenModal(i)}
                />
            );
        }

        return list_bricklayer;
    }

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <Modal
                    visible={this.state.isOpenModal}
                    transparent={true}
                    animationType="slide"
                >
                    <Profile
                        bricklayer={{...this.state.bricklayers[this.state.bricklayersIdModal]}}
                        onCloseModal={() => this.onCloseModal()}
                    />
                </Modal>

                <View style={[styles(this.props).containerBanner]}>
                    <ImageBackground style={[styles(this.props).banner]} source={banner} />
                </View>

                <ScrollView style={[styles(this.props).containerBricklayer]}>
                    {this.renderBricklayers(this.state.bricklayers)}
                </ScrollView>
            </View>
        )
    };
}

export default Main;
