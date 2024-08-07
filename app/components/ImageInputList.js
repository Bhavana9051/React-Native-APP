import React, { useRef } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView horizontal = {true} ref = {scrollView} onContentSizeChange = {() => {scrollView.current.scrollToEnd({animated : true})}}>
                <View style = {styles.container}>
                    {imageUris.map( (uri) =>
                        <View style = {styles.image}  key = {uri}>
                                <ImageInput
                                    imageUri={uri}
                                    onChangeImage={() => onRemoveImage(uri)}
                                />
                        </View>
                    )}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)}/>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
    },
    image: 
    {
        marginRight: 5,
    }
})

export default ImageInputList;