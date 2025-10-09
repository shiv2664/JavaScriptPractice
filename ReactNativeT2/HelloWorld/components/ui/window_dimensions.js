import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, Platform } from "react-native";
import CustomButton from '../customButtonComponents/CustomButton';


export default function WindowSizeComponent() {
    const { width, height } = useWindowDimensions();

    return (

        <View>
            <CustomButton title="Pressed" onPress={() => console.log("Pressed")}>

            </CustomButton>
        </View>
        // <View
        //     style={[
        //         styles.box,
        //         {
        //             width: width > 700 ? "50%" : "90%",
        //             height: height > 1000 ? "50%" : "90%",
        //         },
        //     ]}>
        //     <Text style={styles.text}>
        //         Width: {Math.round(width)} | Height: {Math.round(height)}
        //     </Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    box: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        backgroundColor: "teal",
    },
    text: {
        ...Platform.select({
            ios: {
                color: "white",
                // fontWeight: Platform.OS == "android" ? "italic" : "bold",
                fontWeight: "bold",
                fontSize: 30
            },
            android:{
                color: "blue",
                // fontWeight: Platform.OS == "android" ? "italic" : "bold",
                fontWeight: "bold",
                fontSize: 30
            }
        })

    },
});
