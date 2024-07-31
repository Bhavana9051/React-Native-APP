import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CatalogsEditScreen from "../screens/CatalogsEditScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewCatalogAddButton from "./NewCatalogAddButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  useNotifications();
  const { token, setToken } = useState(null);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CatalogsEdit"
        component={CatalogsEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewCatalogAddButton
              onPress={() => navigation.navigate(routes.CATALOG_EDITS)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="AccountNavigator"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
