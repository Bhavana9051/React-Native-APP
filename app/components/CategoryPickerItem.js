import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

import Icon from './Icon';
import AppText from './AppText';

function CategoryPickerItem({item, onPress}) {
    return (
        <TouchableOpacity style = {styles.container} onPress = {onPress}>
            <Icon name={item.icon} backgroundColor= {item.backgroundColor}/>
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:
    {
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%"
    },
    text:
    {
        fontSize: 12,
        marginTop: 5,
        textAlign: "center",
    }
})

export default CategoryPickerItem;