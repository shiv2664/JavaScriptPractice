import React from "react";
import { View, Text, StyleSheet } from "react-native";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Box = ({ children,style}) => {
  const randomColor = getRandomColor();
  return (
    <View style={[styles.box, { backgroundColor: randomColor},style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width:150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexShrink:1,
    margin:10,
    flexGrow:1
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Box;
