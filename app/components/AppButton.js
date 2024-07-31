import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color = "lightGreen"}) {
    return (
        <TouchableOpacity style = {[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:
    {
        backgroundColor: colors.lavender,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: "100%",
        borderRadius: 50,
        marginVertical: 10,
      },
      text:
      {
        textTransform: "capitalize",
        fontSize: 20,
        color: colors.white,
        fontWeight: "condensed",
      },
})

export default AppButton;