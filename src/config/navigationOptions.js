/**
 * react-navigation StackNavigator config https://reactnavigation.org/docs/navigators/stack
 */

import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#fff',
    },
    left: {
        color: '#fff',
    },
    right: {
        color: '#fff',
        marginRight: 15,
    }
});

export default navigationOptions = {
    title: '投资有道',
    headerTintColor: '#000',
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerLeft: <Icon name='chevron-left' size={40} style={styles.left} />,
    headerRight: <Text style={styles.right}>投稿</Text>
};