import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Button, StyleSheet } from "react-native";
import Card from "../components/Card";

import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

import AppText from "../components/AppText";
import equipmentApi from "../api/equipment";
import useApi from "../hooks/useApi";

function EquipmentScreen({ navigation }) {
  const getEquipmentApi = useApi(equipmentApi.getEquipment);

  useEffect(() => {
    getEquipmentApi.request();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen style={styles.screen}>
      {getEquipmentApi.error && (
        <>
          <Screen style={{ justifyContent: "center", alignItems: "center" }}>
            <AppText justifySelf="center">
              Equipment List Could Not Be Retrieved
            </AppText>
            <Button
              title="Try Again"
              onPress={getEquipmentApi.request}
              color={colors.paddleOrange}
            />
          </Screen>
        </>
      )}
      <ActivityIndicator animating={getEquipmentApi.loading} />
      <FlatList
        data={getEquipmentApi.data}
        keyExtractor={(equipment) => equipment.equipmentID.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.productName}
            subTitle={"£" + item.hirePrice}
            image={require("../assets/canoe.jpg")}
            //onPress={() => console.log(item)}
            //onPress={EquipmentDetailsScreen}
            onPress={() => navigation.navigate(routes.EQUIPMENT_DETAILS, item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          getEquipmentApi.request();
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default EquipmentScreen;
