import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import catalogsApi from "../api/catalogs";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

function CatalogsScreen({ navigation }) {
  const getCatalogsApi = useApi(catalogsApi.getCatalogs);

  useEffect(() => {
    getCatalogsApi.request();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={getCatalogsApi.loading} />
      <Screen style={styles.screen}>
        {getCatalogsApi.error && (
          <View style={{ marginTop: 20 }}>
            <Text
              style={{
                color: colors.darkGrey,
                textAlign: "center",
                marginVertical: 20,
                color: colors.mediumlavender,
              }}
            >
              Something Went Wrong
            </Text>
            <AppButton title="Retry" onPress={getCatalogsApi.request} />
          </View>
        )}
        <FlatList
          data={getCatalogsApi.data}
          keyExtractor={(catalog) => catalog.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"₹" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(routes.CATALOG_DETAILS, item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.lightLavender,
  },
});

export default CatalogsScreen;
