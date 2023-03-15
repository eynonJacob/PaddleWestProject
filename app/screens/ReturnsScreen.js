import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import colors from "../config/colors";
import AppText from "../components/AppText";

import hiresApi from "../api/hires";
import useApi from "../hooks/useApi";

function ReturnsScreen({ navigation }) {
  const getHiresApi = useApi(hiresApi.getHires);

  useEffect(() => {
    getHiresApi.request();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = async (hireID) => {
    console.log("return ", hireID);
    const result = await hiresApi.returnHire(hireID);
    console.log("await");
    //console.log(hire.hireID.toString());
    if (!result.ok) return alert("Hire could not be returned");
    alert("Hire successfully returned");
    //refresh after complete
    getHiresApi.request();
  };

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
            image={require("../assets/canoe.jpg")}
            onPress={() => navigation.navigate(routes.HIRE_DETAILS, item)}
            renderRightActions={() => (
              <TouchableWithoutFeedback
                onPress={() => handleDelete(item.hireID)}
              >
                <View
                  style={{
                    backgroundColor: colors.green,
                    width: 70,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons
                    name="assignment-return"
                    size={45}
                    color={colors.white}
                  />
                </View>
              </TouchableWithoutFeedback>
            )}
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

export default ReturnsScreen;
