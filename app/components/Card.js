import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Card({ imageUrl, title, subTitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.infoContainer}>
          <AppText style={styles.title} numberOfLines={2}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    padding: 20,
  },
  subTitle: {
    fontSize: 18,
    color: colors.lavender,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
  },
});

export default Card;
