import React, { useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from  'expo-image-picker';

import colors from '../config/colors';

function ImageInput({imageUri, onChangeImage}) {
    const handlePress = () => {
        if (!imageUri) selectImage();
        else{
            Alert.alert("Delete", "Are you Sure you wanna Delete?", [
                {text: "Yes", onPress: () => onChangeImage(null)},
                {text: "No"}
            ])
        }
    };

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5,
          });
          if(!result.canceled){
            onChangeImage(result.assets[0].uri);
          }
        } catch (error) {
          console.log('Error reading the image', error);
        }
      };

      //Permissions Request for the first time
      const requestCameraPermission = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        if(!granted){
          alert('You need to enable camera permissions');
        }
      };
      
      useEffect(() => {
        requestCameraPermission();
      }, [])
    
    
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style = {styles.container}>
                {!imageUri && <MaterialCommunityIcons name='camera' color={colors.darkGrey} size = {40}/>}
                {imageUri && <Image source={{uri: imageUri}} style = {styles.image}/>}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colors.lightGrey,
        width: 100,
        height: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: "hidden",
    },
    image:
    {
        width: '100%',
        height: '100%',
    },
})

export default ImageInput;