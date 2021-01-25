import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = (props) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0000007C",
        },

        containerModal: {
            padding: 10,
            borderRadius: 15,
            width: "95%",
            backgroundColor: "#FFF",
        },

        inputContainer: {
            backgroundColor: "#DDD",
            borderRadius: 15,
            marginTop: 10,
        },

        boxContainer: {
            marginTop: 10,
            flexDirection: "row",
        },

        buttonsContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            borderTopWidth: 10,
            paddingTop: 10,
            marginTop: 10,
            borderColor: commonStyles.colors.secundary.light,
        },

        inputContent: {
            marginHorizontal: 10,
            fontFamily: commonStyles.fonts.text,
            fontSize: 20,
        },

        tittle: {
            fontFamily: commonStyles.fonts.tittle,
            fontSize: 35,
            textAlign: "center",
            color: commonStyles.colors.secundary.dark,
            borderBottomWidth: 10,
            borderColor: commonStyles.colors.secundary.light,
        },

        subtittle: {
            fontFamily: commonStyles.fonts.subtittle,
            fontSize: 25,
            color: commonStyles.colors.primary.dark,
            marginTop: 15,
        },

        marginHorizontal10: {
            marginHorizontal: 10,
        },

        marginLeft10: {
            marginLeft: 10,
        },

        flex1: {
            flex: 1,
        },
    });
}

export default styles;
