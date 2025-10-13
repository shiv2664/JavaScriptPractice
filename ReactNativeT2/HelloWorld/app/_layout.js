import { View, Text, StyleSheet, ScrollView, Platform, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BasicComponent from '../components/ui/basicComponents';
import Box from '../components/ui/box';
import WindowSizeComponent from '../components/ui/window_dimensions';
import { StatusBar } from 'expo-status-bar';
import PokemonCardParent from '../components/PokemonCard/PokemonCardParent';
import ListingExample from '../components/ListComponent/ListingExample';
import pokemonList from '../assets/data.json'
import LoginForm from '../components/LoginForm/LoginForm';
import RNNetworking from '../components/RNNetworking/RNNetworking';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="plum"     // matches container background
        barStyle="dark-content"    // use "light-content" for dark bg
        translucent={false} />
        <RNNetworking>
          
        </RNNetworking>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "plum",
    flexDirection: "row", // vertical layout
    // alignItems:"center",     // horizontal center
    // justifyContent: "center", // vertical center
    columnGap: 10

  },
  title: { fontSize: 30, color: "white" },
  desc: { fontSize: 20, color: "white" },
  box: {
    width: 150,
    height: 150,
    padding: 5,
    borderWidth: 2,
    borderColor: "plum",
    margin: 10,
    borderRadius: 10
  },
  greenBox: {
    backgroundColor: "green"
  },
  redBox: {
    backgroundColor: "red"
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    width: "90%",
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  }
})



{/* <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text>{item.id}</Text>
              <Text>{item.name}</Text>
              <Text>{item.type}</Text>
            </View>
          );
        }}
        ListEmptyComponent={<Text>No Items Found</Text>}>
      </FlatList> */}

// <SafeAreaView style={styles.container}>
//    <StatusBar
//     backgroundColor="plum"     // matches container background
//     barStyle="dark-content"    // use "light-content" for dark bg
//     translucent={false}/>
//   <WindowSizeComponent>

//   </WindowSizeComponent>
// </SafeAreaView>
