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
            padding: 15,
            backgroundColor: "#FFF",
            borderRadius: 15,
        },

        containerInput: {
            backgroundColor: "#CCC",
            borderRadius: 30,
            paddingHorizontal: 10,
        },

        containerButtons: {
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
        },

        tittle: {
            textAlign: "center",
            fontFamily: commonStyles.fonts.tittle,
            fontSize: 30,
            color: commonStyles.colors.secundary.dark,
            marginBottom: 15,
        },

        textInput: {
            fontFamily: commonStyles.fonts.subtittle,
            fontSize: 20,
        },
    });
}

export default styles;
