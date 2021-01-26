import { StyleSheet, Dimensions } from "react-native";

import commonStyles from "../../commonStyles";

const styles = (props) => {
    return StyleSheet.create({
        container: {
            flex: 1,
        },

        containerBanner: {
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width / 2,
        },

        containerBricklayer: {
            flex: 1,
            padding: 10,
        },

        containerTrash: {
            justifyContent: "center",
            marginBottom: 10,
        },

        buttonAdd: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: commonStyles.colors.primary.dark,
            position: "absolute",
            borderRadius: props.size / 2,
            overflow: "hidden",
            width: props.size,
            height: props.size,
            top: 0,
            right: 0,
            margin: 10,
        },

        textEmpty: {
            textAlign: "center",
            color: commonStyles.colors.primary.dark,
            fontFamily: commonStyles.fonts.tittle,
            fontSize: 20,
        },

        banner: {
            flex: 1,
        },

        buttonAlert: {
            fontFamily: commonStyles.fonts.subtittle,
        },

        trash: {
            backgroundColor: "#A00",
            justifyContent: "center",
            alignItems: "center",
            padding: 30,
            width: 100,
            height: 100,
            borderRadius: 50,
            margin: 5,
        },
    });
}

export default styles;
