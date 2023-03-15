import React from "react";
import { View, Image, StyleSheet, Text, ScrollView } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";

function EquipmentDetailsScreen({ route }) {
  const equipments = route.params;
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={require("../assets/canoe.jpg")} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{equipments.productName}</Text>
          <Text style={styles.subTitle}>£{equipments.hirePrice} per week</Text>
          <AppText>Equipment ID: {equipments.equipmentID}</AppText>
          <AppText />
          <Text style={styles.subTitle}>Maintenance Information</Text>
          <AppText>
            Date of Purchase: {equipments.dateOfPurchase.substring(0, 10)}
          </AppText>
          <AppText>Activity Status: {equipments.active}</AppText>
          <AppText>
            Next Check Date: {equipments.checkDate.substring(0, 10)}
          </AppText>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 9,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 7,
  },
});

export default EquipmentDetailsScreen;
