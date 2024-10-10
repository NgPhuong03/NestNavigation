import { View , Text, StyleSheet, Button} from "react-native"

export default Helps = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Helps screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});