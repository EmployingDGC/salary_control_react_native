import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = (props) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#0000007C",
            justifyContent: "center",
            alignItems: "center",
        },

        containerModal: {
            padding: 20,
            backgroundColor: "#FFF",
            borderRadius: 20,
        },

        containerIcon: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
        },

        tittle: {
            textAlign: "center",
            fontFamily: commonStyles.fonts.tittle,
            color: commonStyles.colors.secundary.dark,
            fontSize: 50,
            marginBottom: 10,
        },

        subtittle: {
            textAlign: "center",
            fontFamily: commonStyles.fonts.subtittle,
            fontSize: 30,
            marginRight: 20,
        },

        containerAnimation: {
            transform: [{ rotateZ: props.rotate }]
        },
    });
}

export default styles;
