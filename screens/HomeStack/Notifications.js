import { View , Text, StyleSheet, Button} from "react-native"



export default HomeScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <Text>Notifications screen</Text>
            <Button title={'Go to Details'} onPress={() => {navigation.navigate('NotificationDetailsScreen')}}/>
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