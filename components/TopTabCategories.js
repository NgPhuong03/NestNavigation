import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const Categories1 = () => <View style={styles.container}><Text>Categories1</Text></View>;
const Categories2 = () => <View style={styles.container}><Text>Categories2</Text></View>;
const Categories3 = () => <View style={styles.container}><Text>Categories3</Text></View>;


const TopTabCategories = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Categories1" component={Categories1} />
        <Tab.Screen name="Categories2" component={Categories2} />
        <Tab.Screen name="Categories3" component={Categories3} />
    </Tab.Navigator>
  );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TopTabCategories;