import React from "react";
import {
    View,
    ScrollView,
    ImageBackground,
    Modal,
} from "react-native";

import Bricklayers from "../../components/Main/Bricklayers";
import Profile from "../../components/Main/Profile";

import banner from "../../../assets/images/banner.fw.png";

import styles from "./styles";

const initialState = {
    name: "",
    ddd: "",
    tel: "",
    dailySalary: 0,
    pendingAmount: 0,
    workedDays: [],
    open: false,
};

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modalState: initialState,
        }
    }

    onUpdateModal = () => {

        this.onCloseModal();
    }

    onOpenModal = (bricklayer) => {
        if (!bricklayer) {
            return;
        }

        this.setState({
            modalState: {
                name: bricklayer.name,
                ddd: bricklayer.ddd,
                tel: bricklayer.tel,
                dailySalary: bricklayer.dailySalary,
                pendingAmount: bricklayer.pendingAmount,
                workedDays: bricklayer.workedDays,
                open: true,
            },
        })
    }

    onCloseModal = () => {
        this.setState({
            modalState: initialState,
        });
    }

    renderBricklayers = (bricklayers = []) => {
        const list_bricklayer = [];

        for (let i = 0; i < bricklayers.length; i++) {
            const element = bricklayers[i];
            
            list_bricklayer.push(
                <Bricklayers
                    key={i}
                    name={element.name}
                    dailySalary={element.dailySalary}
                    workedDays={element.workedDays.length}
                    onPress={() => this.onOpenModal(bricklayers[i])}
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
                            onCloseModal={this.onCloseModal}
                        />
                    </Modal> : null
                }
                <View style={[styles().containerBanner]}>
                    <ImageBackground style={[styles().banner]} source={banner} />
                </View>

                <ScrollView style={[styles().containerBricklayer]}>
                    {this.renderBricklayers(this.props.route.params.bricklayers)}
                </ScrollView>
            </View>
        )
    };
}

export default Main;
