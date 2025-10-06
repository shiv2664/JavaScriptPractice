import { View, Text, StyleSheet } from 'react-native';
import BasicComponent from '../components/ui/basicComponents';
import Box from '../components/ui/box';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Box>Box 1</Box>
      <Box style={{position:"relative",top :75,left:25}}>Box 2</Box>
      <Box>Box 3</Box>
      <Box style={{position:"absolute",top :75,left:25}}>Box 4</Box>
      <Box>Box 5</Box>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:300,
    padding: 30,
    backgroundColor: "black",
    flexDirection: "column",
    alignItems:"flex-start",
    columnGap:10

  },
  title: { fontSize: 30, color: "white" },
  desc: { fontSize: 20, color: "white" },
  box: {
    width: 150,
    height: 150,
    padding: 5,
    borderWidth: 2,
    borderColor: "black",
    margin: 10,
    borderRadius: 10
  },
  greenBox: {
    backgroundColor: "green"
  },
  redBox: {
    backgroundColor: "red"
  }
})


