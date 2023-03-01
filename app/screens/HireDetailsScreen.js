import React from "react";
import { View, Image, ScrollView, StyleSheet, Text } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function HireDetailsScreen({ route }) {
  const hire = route.params;
  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={require("../assets/canoe.jpg")} />
      </View>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{hire.customerName}</AppText>
        <AppText style={styles.subTitle}>Customer Contact</AppText>
        <AppText>Phone: {hire.customerPhone}</AppText>
        <AppText>Email: {hire.customerEmail}</AppText>
        <AppText />
        <AppText style={styles.subTitle}>Hire Information</AppText>
        <AppText>Loaned: {hire.dateOfHire}</AppText>
        <AppText>Return by: {hire.dateOfReturn}</AppText>
        <AppText />

        <Text>
          Details of return date, clickable link for equipment, return button
          etc... to come
        </Text>
        {/* <AppButton title="+"> </AppButton> */}
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/pfp.jpg")}
            title="Jacob Eynon"
            subTitle="2 Hires"
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
