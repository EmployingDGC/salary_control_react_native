import { StyleSheet } from "react-native";

import commonStyles from "../../../commonStyles";

const styles = (props) => {
    return StyleSheet.create({
        container: {
            padding: 20,
            borderWidth: 4,
            borderColor: commonStyles.colors.secundary.light,
            backgroundColor: commonStyles.colors.primary.light,
            marginBottom: 10,
            borderRadius: 20,
        },
        
        containerProfile: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginBottom: 10,
        },

        containerIcon: {
            borderWidth: 4,
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
            borderRadius: 30,
            borderColor: commonStyles.colors.secundary.light,
        },

        containerInfo: {
            justifyContent: "center",
            alignItems: "center",
        },

        textInfo: {
            fontFamily: commonStyles.fonts.subtittle,
            fontSize: 20,
            textAlign: "center",
        },

        textProfile: {
            color: commonStyles.colors.primary.dark,
            fontFamily: commonStyles.fonts.tittle,
            fontSize: 25,
            textAlign: "center",
        },
    });
}

export default styles;
