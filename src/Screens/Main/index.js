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
            dailySalary: 150.817,
            pendingAmount: 1,
            workedDays: [
                {
                    date: "16/02/1997",
                    isPaidOut: false,
                },
            ],
        },
    ],
}

const initialStateModal = {
    name: "",
    ddd: "",
    tel: "",
    id: 0,
    dailySalary: 0,
    pendingAmount: 0,
    workedDays: [],
    open: false,
};

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalState: initialStateModal,
            bricklayers: [],
        }
    }

    componentDidMount = async () => {
        const jsonValue = await AsyncStorage.getItem(storageKey);
        
        if (jsonValue === null) {
            this.setState({
                bricklayers: [],
            });
        }

        else {
            this.setState({
                bricklayers: JSON.parse(jsonValue),
            });
        }
    }

    setBricklayers = async (bricklayers) => {
        const jsonValue = JSON.stringify(bricklayers);
        await AsyncStorage.setItem(storageKey, jsonValue);
    }

    onUpdateModal = (bricklayer) => {
        const allBricklayers = this.state.bricklayers;
        const pos = bricklayer.id;

        allBricklayers[pos] = bricklayer;

        let countPendingAmount = 0;

        for (let i = 0; i < allBricklayers[pos].workedDays.length; i++) {
            const element = allBricklayers[pos].workedDays[i];
            
            if (!element.isPaidOut) {
                countPendingAmount += 1;
            }
        }

        allBricklayers[pos].pendingAmount = countPendingAmount;

        this.setState({
            bricklayers: allBricklayers,
        });

        this.onCloseModal();
    }

    onOpenModal = (bricklayer, id) => {
        if (!bricklayer) {
            return;
        }

        this.setState({
            modalState: {
                name: bricklayer.name,
                ddd: bricklayer.ddd,
                tel: bricklayer.tel,
                id,
                dailySalary: bricklayer.dailySalary,
                pendingAmount: bricklayer.pendingAmount,
                workedDays: bricklayer.workedDays,
                open: true,
            },
        })
    }

    onCloseModal = () => {
        this.state.modalState = initialStateModal;

        console.log(this.state.modalState);

        this.setState({
            modalState: initialStateModal,
        });

        console.log(this.state.modalState);
    }

    onUpdatePaidModal = (pos) => {
        const modalState = this.state.modalState;

        modalState.workedDays[pos].isPaidOut = true;

        modalState.pendingAmount -= 1;

        this.setState({
            modalState,
        });
    }

    renderBricklayers = (bricklayers = []) => {
        const list_bricklayer = [];

        for (let i = 0; i < bricklayers.length; i++) {
            const element = bricklayers[i];
            
            list_bricklayer.push(
                <Bricklayers
                    key={`${i}`}
                    name={element.name}
                    dailySalary={element.dailySalary}
                    workedDays={element.workedDays.length}
                    onPress={() => this.onOpenModal(bricklayers[i], i)}
                />
            );
        }

        return list_bricklayer;
    }

    render() {
        return (
            <View style={[styles().container]}>
                {
                    this.state.modalState.open ?
                    <Modal
                        transparent={true}
                        animationType="slide"
                    >
                        <Profile
                            bricklayer={this.state.modalState}
                            onUpdateModal={this.onUpdateModal}
                            onUpdatePaid={this.onUpdatePaidModal}
                            onCloseModal={this.onCloseModal}
                        />
                    </Modal> : null
                }
                <View style={[styles().containerBanner]}>
                    <ImageBackground style={[styles().banner]} source={banner} />
                </View>

                <ScrollView style={[styles().containerBricklayer]}>
                    {this.renderBricklayers(this.state.bricklayers)}
                </ScrollView>
            </View>
        )
    };
}

export default Main;
