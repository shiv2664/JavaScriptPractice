import { Text, View } from 'react-native'
import { styles } from '../../app/_layout'

export default function Greet({ name }) {
    return (
    <View>
        <Text>{name}</Text>
    </View>
    )
}