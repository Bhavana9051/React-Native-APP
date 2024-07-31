import { useEffect } from "react";
import * as Device from "expo-device";
import { Platform } from "react-native";

import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPush";
import navigation from "../navigation/rootNavigation";

const useNotifications = () => {
  useEffect(() => {
    registerForPushNotifications();
    Notifications.addNotificationReceivedListener((notification) => {
      navigation.navigate("Summary");
    });
  }, []);

  const registerForPushNotifications = () =>
    registerForPushNotificationsAsync();

  const registerForPushNotificationsAsync = async () => {
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        console.log("not granted");
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushTokensApi.register(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#dce0fa",
      });
    }
  };
};

export default useNotifications;
