import { View, Text, StyleSheet } from 'react-native';
import BasicComponent from '../components/ui/basicComponents';

export default function RootLayout() {
  return (
    <View>
      <BasicComponent>
      </BasicComponent>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: "red" },
  title: { fontSize: 30, color: "white" },
  desc: { fontSize: 20, color: "white" },
  box: {
    width: 150,
    height: 150,
    padding: 5,
    borderWidth: 2,
    borderColor:"black",
    margin:10,
    borderRadius: 10
  },
  greenBox: {
    backgroundColor: "green"
  },
  redBox: {
    backgroundColor: "red"
  }
})


