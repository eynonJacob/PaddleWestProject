import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import colors from "../config/colors";

import AppText from "../components/AppText";
import hiresApi from "../api/hires";
import useApi from "../hooks/useApi";

function ReturnsHistoryScreen({ navigation }) {
  const getHiresApi = useApi(hiresApi.historicHires);

  useEffect(() => {
    getHiresApi.request();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      // alert("Refreshed");
    });
    return focusHandler;
  }, [navigation]);

  return (
    <Screen>
      {getHiresApi.error && (
        <>
          <Screen style={{ justifyContent: "center", alignItems: "center" }}>
            <AppText justifySelf="center">
              Hire List Could Not Be Retrieved
            </AppText>
            <Button
              title="Try Again"
              onPress={getHiresApi.request}
              color={colors.paddleOrange}
            />
          </Screen>
        </>
      )}
      <ActivityIndicator animating={getHiresApi.loading} />

      <FlatList
        data={getHiresApi.data}
        keyExtractor={(hire) => hire.hireID.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.customerName}
            subTitle={item.hireID}
            image={require("../assets/placeholder.png")}
            //onPress={() => navigation.navigate(routes.HIRE_DETAILS, item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          getHiresApi.request();
        }}
      />
    </Screen>
  );
}

export default ReturnsHistoryScreen;
