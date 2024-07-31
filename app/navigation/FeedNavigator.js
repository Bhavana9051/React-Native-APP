import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CatalogsScreen from "../screens/CatalogsScreen";
import CatalogDetailsScreen from "../screens/CatalogDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      presentation: "modal",
      gestureEnabled: true,
      gestureDirection: "vertical-inverted",
      headerShown: false,
    }}
  >
    <Stack.Screen name="Catalogs" component={CatalogsScreen} />
    <Stack.Screen name="CatalogDetails" component={CatalogDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
