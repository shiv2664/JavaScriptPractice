import { View, ScrollView, FlatList, StyleSheet, Platform } from "react-native";
import pokemonList from '../../assets/data.json'


export default function ListingExample() {
    return (
        <FlatList
            data={pokemonList}
            renderItem={({ item }) => {
                return (
                    <View style={styles.card}>
                        <Text>{item.id}</Text>
                        <Text>{item.name}</Text>
                        <Text>{item.type}</Text>
                    </View>
                );
            }}></FlatList>

    );
}

const styles = StyleSheet.create({
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