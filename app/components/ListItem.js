import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Text } from 'react-native';
import {Swipeable}  from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({title, subTitle, image, IconComponent, onPress, renderRightActions}) {
    return (
        <Swipeable 
            renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightLavender}
                onPress={onPress}>
                    <View style = {styles.container}>
                        {IconComponent}
                        {image && <Image source={image} style = {styles.image} />}
                        <View style = {styles.detailsContainer}>
                            <Text style={styles.title} numberOfLines = {1}>{title}</Text>
                            {subTitle && <Text style={styles.subTitle} numberOfLines = {2} > {subTitle} </Text>}
                        </View>
                        <MaterialCommunityIcons color = {colors.grey} name = "chevron-right" size={25}/>
                    </View>
            </TouchableHighlight>
        </Swipeable>
        
    );
}



const styles = StyleSheet.create({
    container:
    {
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white
    },
    detailsContainer:
    {
        flex: 1,
        marginTop: 5,
        marginLeft: 10,
        justifyContent: "center",
    },
    image:
    {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    subTitle:
    {
        color: colors.lavender,
    },
    title:
    {
        fontSize: 15,
        fontWeight: "350",
        marginVertical: 5,
    },
})

export default ListItem;