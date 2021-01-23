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
            borderRadius: 20,
            width: "95%",
            padding: 20,
            backgroundColor: "#FFF",
        },

        containerHeader: {

        },

        containerFooter: {
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
        },

        textHeader: {
            textAlign: "center",
            fontSize: 30,
            color: commonStyles.colors.primary.dark,
            fontFamily: commonStyles.fonts.tittle,
        },
    });
}

export default styles;
