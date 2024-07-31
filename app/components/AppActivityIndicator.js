import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={styles.loader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loader: {
    width: 250,
    height: 250,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    position: "absolute",
    width: "100%",
    zIndex: 1,
    opacity: 0.8,
  },
});

export default AppActivityIndicator;
