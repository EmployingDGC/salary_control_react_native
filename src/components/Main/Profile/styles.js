import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = (props) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 10,
            justifyContent: "center",
            backgroundColor: "#0000007C",
        },

        containerModal: {
            padding: 10,
            borderRadius: 20,
            justifyContent: "space-between",
            backgroundColor: "#FFF",
        },

        containerHeader: {
            marginBottom: 10,
        },

        containerMain: {

        },

        containerTel: {
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },

        containerScroll: {
            maxHeight: 400,
            backgroundColor: commonStyles.colors.primary.light,
            borderRadius: 10,
        },

        containerDate: {
            margin: 10,
            paddingHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: commonStyles.colors.primary.dark,
            borderRadius: 25,
        },

        containerFooter: {
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
        },

        textHeader: {
            textAlign: "center",
            fontSize: 30,
            color: commonStyles.colors.secundary.light,
            fontFamily: commonStyles.fonts.tittle,
        },

        subtittleText: {
            fontSize: 25,
            marginRight: 10,
            color: commonStyles.colors.primary.dark,
            fontFamily: commonStyles.fonts.subtittle,
        },

        contentText: {
            fontSize: 20,
            marginRight: 10,
            color: commonStyles.colors.primary.dark,
            fontFamily: commonStyles.fonts.text,
        },

        textDate: {
            fontSize: 20,
            color: "#FFF",
            fontFamily: commonStyles.fonts.subtittle,
        },

        textAmount: {
            marginVertical: 20,
            marginHorizontal: 10,
            padding: 10,
            borderRadius: 25,
            textAlign: "center",
            backgroundColor: commonStyles.colors.primary.dark,
        },

        button: {
            borderWidth: 4,
            width: "30%",
            alignItems: "center",
            borderColor: "#0A0",
            borderRadius: 20,
        },
    });
}

export default styles;
