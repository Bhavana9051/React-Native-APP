import React from "react";
import * as Progress from "react-native-progress";
import { Modal, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.CircleSnail
            progress={progress}
            color={colors.lightGreen}
            width={300}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/doneIcon.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    color: colors.lightGreen,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadScreen;
