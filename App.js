import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as Notifications from "expo-notifications";

import AppStartPoint from "./app/screens/AppStartPoint";

export default function App() {
  return (
    <GestureHandlerRootView>
      <AppStartPoint />
    </GestureHandlerRootView>
  );
}
