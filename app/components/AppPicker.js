import React, { useState } from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import AppButton from './AppButton';
import Screen from './Screen';
import PickerItem from './PickerItem';


function AppPicker({selectedItem, icon, items,numberOfColumns = 1, onSelectItem , PickerItemComponent = PickerItem, placeholder, width = "100%"}) {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <>
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style = {[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons name={icon} size = {30} color={defaultStyles.colors.lavender} style = {styles.icon}/> }
                {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                <MaterialCommunityIcons 
                    name={"chevron-down"} 
                    size = {30} 
                    color={defaultStyles.colors.lavender} 
                />  
            </View>
        </TouchableWithoutFeedback>
        <Modal visible = {modalVisible} animationType="slide">
            <Screen>
                <AppButton title={"close"} onPress={() => setModalVisible(false)} color = "lavender" ></AppButton>
                <FlatList
                    data = {items}
                    keyExtractor = {item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({item}) =>
                        <PickerItemComponent
                            item = {item}
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                                }
                            }/>
                    }
                />
            </Screen>
        </Modal>
        </>
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
    placeholder:
    {
        flex: 1,
        color: defaultStyles.colors.lightSlateGrey,
    },
    text:
    {
        flex: 1,
    }
})

export default AppPicker;