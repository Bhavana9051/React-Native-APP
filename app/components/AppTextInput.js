import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({icon, placeholderTextColor = defaultStyles.colors.lightSlateGrey , width = "100%", ...otherProps }) {
    return (
       <View style = {[styles.container, {width}]}>
         {icon && <MaterialCommunityIcons name={icon} size = {30} color={defaultStyles.colors.lavender} style = {styles.icon}/> }
         <TextInput style = {defaultStyles.text} placeholderTextColor={placeholderTextColor} {...otherProps}/>
       </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection: "row",
        borderRadius: 40,
        backgroundColor: defaultStyles.colors.lightGrey,
        padding: 10,
        marginVertical: 15,
    },
    icon:
    {
        marginRight: 10,
    },
})

export default AppTextInput;