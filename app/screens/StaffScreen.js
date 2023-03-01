import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button, FlatList } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import colors from "../config/colors";

import AppText from "../components/AppText";
import staffApi from "../api/staff";
import useApi from "../hooks/useApi";

function StaffScreen({ navigation }) {
  const getStaffApi = useApi(staffApi.getStaff);

  useEffect(() => {
    getStaffApi.request();
  }, []);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      {getStaffApi.error && (
        <>
          <Screen style={{ justifyContent: "center", alignItems: "center" }}>
            <AppText justifySelf="center">
              Staff List Could Not Be Retrieved
            </AppText>
            <Button
              title="Try Again"
              onPress={getStaffApi.request}
              color={colors.paddleOrange}
            />
          </Screen>
        </>
      )}
      <ActivityIndicator animating={getStaffApi.loading} />
      <FlatList
        data={getStaffApi.data}
        keyExtractor={(staff) => staff.email.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={item.email}
            image={require("../assets/pfp.jpg")}
            onPress={() => alert(item.name)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          getStaffApi.request();
        }}
      />
    </Screen>
  );
}

export default StaffScreen;
