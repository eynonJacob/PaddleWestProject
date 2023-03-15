import React from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

import hiresApi from "../api/hires";

function HireDetailsScreen({ route, navigation }) {
  const handleDelete = async (hireID) => {
    console.log("return ", hireID);
    const result = await hiresApi.returnHire(hireID);
    console.log("await");
    //console.log(hire.hireID.toString());
    if (!result.ok) return alert("Hire could not be returned");
    alert("Hire successfully returned");
    navigation.navigate("Hires");
  };
  const hire = route.params;
  return (
    <ScrollView>
      {/* <View>
        <Image style={styles.image} source={require("../assets/canoe.jpg")} />
      </View> */}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{hire.customerName}</AppText>
        <AppText>Hire ID: {hire.hireID}</AppText>
        <AppText />
        <AppText style={styles.subTitle}>Customer Contact</AppText>
        <AppText>Phone: {hire.customerPhone}</AppText>
        <AppText>Email: {hire.customerEmail}</AppText>
        <AppText />
        <AppText style={styles.subTitle}>Equipment Information</AppText>
        <AppText>Equipment ID: {hire.equipmentID}</AppText>
        <AppText />
        <AppText style={styles.subTitle}>Hire Information</AppText>
        <AppText>Loaned: {hire.dateOfHire.substring(0, 10)}</AppText>
        <AppText>Return by: {hire.dateOfReturn.substring(0, 10)}</AppText>
        <AppText />
        <AppButton title="Return" onPress={() => handleDelete(hire.hireID)} />

        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/pfp.jpg")}
            title={hire.customerName}
            subTitle="1 HIRE OUT"
          />
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
    marginBottom: 7,
  },
  title: {
    fontSize: 27,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default HireDetailsScreen;
