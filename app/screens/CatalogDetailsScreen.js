import React from "react";
import { KeyboardAvoidingView, View, StyleSheet, Text } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

function CatalogDetailsScreen({ route }) {
  const catalog = route.params;
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          preview={{ uri: catalog.images[0].thumbnailUrl }}
          tint="light"
          uri={catalog.images[0].url}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{catalog.title}</Text>
          <Text style={styles.price}>₹{catalog.price}</Text>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            title="Kenma Kozume"
            subTitle="3 catalogs"
            image={require("../assets/kenma.jpg")}
          />
        </View>
      </View>
      <ContactSellerForm catalog={catalog} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 30,
    backgroundColor: colors.lightSlateGrey,
    padding: 10,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 20,
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.darkLavender,
  },
  title: {
    marginVertical: 20,
    fontSize: 20,
    color: colors.black,
  },
  userContainer: {
    marginTop: 15,
  },
});

export default CatalogDetailsScreen;
