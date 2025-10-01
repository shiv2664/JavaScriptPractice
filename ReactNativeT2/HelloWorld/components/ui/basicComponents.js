import { useState } from 'react';
import { View, Text, Image, ImageBackground, Button, Pressable, Modal, StatusBar, ScrollView, ActivityIndicator, Alert } from 'react-native';
const logoImage = require("../../assets/images/icon.png");
import Greet from "./greet"
import { styles } from '../../app/_layout';

export default function BasicComponent() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return <View style={styles.container}>

    <StatusBar
      backgroundColor="lightgreen"
      barStyle="dark-content"   // text/icons dark
    />

    <View style={{ height: 50, width: 300, backgroundColor: "purple" }}>
      <Text style={styles.title}>Hello World Bro </Text>
    </View>

    <View style={{ height: 50, width: 300, backgroundColor: "red" }}>
      {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 150, height: 150 }} /> */}
      <Pressable onPress={() => console.log("Image Pressed")}>
        <ImageBackground
          source={{ uri: "https://picsum.photos/300" }}
          style={{ width: 150, height: 150 }}>
          <Image source={logoImage} style={{ width: 50, height: 50 }} />
        </ImageBackground>
      </Pressable>

      <Button
        title="Press Me"
        color="midnightblue"
        onPress={() => {
          setIsModalVisible(true)
          // Alert.alert("Alert", "Incorrect Data", [
          //   {
          //     text: "Cancel",
          //     onPress: () => console.log("Cancel")
          //   },
          //   {
          //     text: "Okay??",
          //     onPress: () => console.log("Are you okay?")
          //   }
          // ])
        }}
        style={{ width: 50, height: 50 }} />

      <Modal visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        presentationStyle='pageSheet'>
        <ScrollView>
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <ActivityIndicator>
            </ActivityIndicator>

            <Pressable onPress={() => setIsModalVisible(false)}>
              <Text style={{ fontSize: 20 }}>Modal Content  The standard Lorem Ipsum passage, used since the 1500s</Text>
              <Greet name={"Shivam"}></Greet>
            </Pressable>
          </View>

          <View style={[styles.box, styles.greenBox]}>
            <Greet name={"Box 1"}></Greet>
          </View>

          <View style={[styles.box, styles.redBox]}>
            <Greet name={"Box 2"}></Greet>
          </View>

        </ScrollView>
      </Modal>

    </View>

  </View>
}