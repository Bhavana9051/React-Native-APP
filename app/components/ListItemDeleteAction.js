import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style = {styles.container}>
                <MaterialCommunityIcons  name='delete' size={40} color="purple"/> 
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:
    {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.lightGreen,
    }
})
export default ListItemDeleteAction;