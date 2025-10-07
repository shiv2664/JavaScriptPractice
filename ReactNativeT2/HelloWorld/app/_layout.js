import { View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BasicComponent from '../components/ui/basicComponents';
import Box from '../components/ui/box';
import WindowSizeComponent from '../components/ui/window_dimensions';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
        backgroundColor="plum"     // matches container background
        barStyle="dark-content"    // use "light-content" for dark bg
        translucent={false}/>
      <WindowSizeComponent>

      </WindowSizeComponent>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "black",
    flexDirection: "column", // vertical layout
    alignItems: "center",     // horizontal center
    justifyContent: "center", // vertical center
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


