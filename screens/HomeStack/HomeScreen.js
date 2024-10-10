import { View , Text, StyleSheet, Button} from "react-native"

export default HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button title={'Go to Details'} onPress={() => {navigation.navigate('HomeDetailsScreen')}}/>
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