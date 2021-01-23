import { StyleSheet, Dimensions } from "react-native";

const styles = () => {
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

        banner: {
            flex: 1,
        },
    });
}

export default styles;
