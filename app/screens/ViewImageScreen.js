import React from 'react';
import { Image, View, StyleSheet,} from 'react-native';
import {MaterialCommunityIcons,} from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>
            <View style = {styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="purple" size={35}/>
            </View>            
            <View style = {styles.deleteIcon}>
                <MaterialCommunityIcons name="delete" color="purple" size={35}/>
            </View>            
            <Image 
            resizeMode='contain'
            style = {styles.image}
            source={require('../assets/view-image-background.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: colors.lightLavender,
    },
    closeIcon:
    {
        position: "absolute",
        top: 50,
        left: 25,
    },
    deleteIcon:
    {
        position : "absolute",
        top: 50,
        right: 25,
    },
    image:
    {
        width: "100%",
        height: "100%",
    },

})

export default ViewImageScreen;