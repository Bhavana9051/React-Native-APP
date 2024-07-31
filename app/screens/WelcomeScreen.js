import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0.5}
      style={styles.background}
      source={require("../assets/other-background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-ffjpg.jpg")}
        />
        <Text style={styles.subLogoTitle}>Let's clear off the Shelves</Text>
      </View>
      <AppButton
        title="Login"
        onPress={() => {
          navigation.navigate(routes.LOGIN);
        }}
      />
      <AppButton
        title="Register"
        color="lavender"
        onPress={() => {
          navigation.navigate(routes.REGISTER);
        }}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: colors.blue,
    borderRadius: 40,
  },
  logoContainer: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },
  subLogoTitle: {
    fontSize: 18,
    fontFamily: "serif",
    fontStyle: "italic",
    fontWeight: "bold",
    color: colors.black,
    textDecorationLine: "underline",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
