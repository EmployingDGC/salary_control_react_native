import React from "react";
import {
    View,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Text,
    Alert,
} from "react-native";

import Swipeable from "react-native-gesture-handler/Swipeable";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Icon from "react-native-vector-icons/FontAwesome";

import Bricklayers from "../../components/Main/Bricklayers";
import Profile from "../../components/Main/Profile";
import NewBricklayer from "../../components/Main/NewBricklayer";
import Auth from "../../components/Main/Auth";

import banner from "../../../assets/images/banner.fw.png";

import commonStyles from "../../commonStyles";
import styles from "./styles";

const key = "@bricklayers";
const senha = "SENHA123";

const initialState = {
    bricklayers: [],
    isOpenModalNewBricklayers: false,
    isOpenModalBricklayers: false,
    isOpenModalAuth: false,
    isRoot: false,
    bricklayersIdModal: 0,
};

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ...initialState,
        }
    }

    componentDidMount = async () => {
        const stringStorage = await AsyncStorage.getItem(key)
        
        const bricklayers = JSON.parse(stringStorage) || [];

        this.setState({
            bricklayers,
        });
    }

    saveOnStorage = async () => {
        const storage = JSON.stringify(this.state.bricklayers);

        await AsyncStorage.setItem(key, storage);
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

        this.saveOnStorage();

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

        this.saveOnStorage();
    }

    removeBricklayer = (id) => {
        const bricklayers = [ ...this.state.bricklayers ];

        bricklayers.splice(id, 1);

        this.setState({
            bricklayers,
        }, this.saveOnStorage);
    }

    renderTrash = (id) => {
        return (
            <View style={[styles(this.props).containerTrash]}>
                <TouchableOpacity
                    style={[styles(this.props).trash]}
                    activeOpacity={.5}
                    onPress={() => this.state.isRoot ? this.removeBricklayer(id) : this.onToggleModalAuth(id)}
                >
                    <Icon
                        name="trash"
                        size={35}
                        color="#FFF"
                    />
                </TouchableOpacity>
            </View>
        );
    }

    renderBricklayers = (bricklayers = []) => {
        const list_bricklayer = [];

        for (let i = 0; i < bricklayers.length; i++) {
            const element = bricklayers[i];
            
            list_bricklayer.push(
                <Swipeable
                    key={`Bricklayers ${Math.random() + i}`}
                    renderRightActions={() => this.renderTrash(i)}
                >
                    <Bricklayers
                        name={element.name}
                        dailySalary={element.dailySalary}
                        workedDays={element.workedDays.length}
                        onPress={() => this.onOpenModalBricklayers(i)}
                    />
                </Swipeable>
            );
        }

        return list_bricklayer;
    }

    onToggleModalAuth = () => {
        const isOpenModalAuth = !this.state.isOpenModalAuth;

        this.setState({
            isOpenModalAuth,
        });
    }

    onConfirmPassword = (password) => {
        if (!(password === senha)) {
            Alert.alert("Erro", "Senha Incorreta...");
            return;
        }

        Alert.alert("Sucesso!", "Agora você tem privilégios de administrador.");

        this.setState({
            isRoot: true,
        });
    }

    render() {
        return (
            <View style={[styles(this.props).container]}>
                <Modal
                    visible={this.state.isOpenModalAuth}
                    transparent={true}
                    animationType="slide"
                >
                    <Auth
                        onConfirmPassword={this.onConfirmPassword}
                        onCloseModal={this.onToggleModalAuth}
                    />
                </Modal>

                <Modal
                    visible={this.state.isOpenModalBricklayers}
                    transparent={true}
                    animationType="slide"
                >
                    <Profile
                        bricklayer={{...this.state.bricklayers[this.state.bricklayersIdModal]}}
                        onCloseModal={this.onCloseModalBricklayers}
                        onToggleModalAuth={this.onToggleModalAuth}
                        isRoot={this.state.isRoot}
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
                    { this.state.bricklayers.length === 0 ?
                        <TouchableOpacity
                            activeOpacity={.5}
                            onPress={this.onOpenModalNewBricklayers}
                        >
                            <Text style={[styles(this.props).textEmpty]}>
                                {"Clique aqui para adicionar seu primeiro funcionário ..."}
                            </Text>
                        </TouchableOpacity> : null
                    }
                    { this.renderBricklayers(this.state.bricklayers) }
                </ScrollView>
            </View>
        )
    };
}

export default Main;
