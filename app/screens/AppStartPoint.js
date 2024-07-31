import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import NavigationTheme from "../navigation/NavigationTheme";
import OfflineNotice from "../components/OfflineNotice";

logger.start();
SplashScreen.preventAutoHideAsync();

export default function AppStartPoint() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load any resources or data that you need prior to rendering the app
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <View style={{ height: "100%" }} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer theme={NavigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}
