import React, { useEffect, useState } from "react";
import {
  FlatList,
  ActivityIndicator,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";
import AppText from "../components/AppText";

import equipmentApi from "../api/equipment";
import useApi from "../hooks/useApi";

function MaintenanceScreen({ navigation }) {
  const getEquipmentApi = useApi(equipmentApi.needMaintanence);

  useEffect(() => {
    getEquipmentApi.request();
  }, []);

  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      // alert("Refreshed");
    });
    return focusHandler;
  }, [navigation]);

  const handleMaintenance = async (equipmentID) => {
    console.log(equipmentID);
    const result = await equipmentApi.isMaintained(equipmentID);
    console.log("await");
    if (!result.ok) return alert("Could not communicate with server");
    alert("Success");
    Alert.alert("3 months added to maintenance schedule");
    //refresh after complete
    getEquipmentApi.request();
  };

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
            subTitle={"Needs Maintenance"}
            image={require("../assets/background.jpg")}
            onPress={() => handleMaintenance(item.equipmentID)}
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

export default MaintenanceScreen;
