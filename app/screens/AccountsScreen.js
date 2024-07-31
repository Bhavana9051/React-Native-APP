import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/ListItemSeparator";
import routes from "../navigation/routes";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    title: "My Catalogue",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.lavender,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.lavender,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountsScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/kenma.jpg")}
        />
      </View>
      <View style={styles.container1}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        title={"Log Out"}
        IconComponent={
          <Icon name={"logout"} backgroundColor={colors.lavender} />
        }
        onPress={() => logOut()}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightLavender,
  },
  container: {
    backgroundColor: colors.lightLavender,
    flex: 0.3,
  },
  container1: {
    marginVertical: 65,
    backgroundColor: colors.lightLavender,
  },
});

export default AccountsScreen;
