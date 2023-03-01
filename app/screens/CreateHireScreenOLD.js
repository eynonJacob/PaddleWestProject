import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";

function CreateHireScreen(props) {
  return (
    <View style={styles.background}>
      <Screen>
        <Text style={styles.headingText}>Create a Hire</Text>

        <AppTextInput placeholder="Equipment ID" />

        <AppTextInput placeholder="Customer ID" />

        <AppTextInput placeholder="Return Date" />

        <AppTextInput placeholder="Input" />

        <View style={styles.container}>
          <AppButton title="Confirm Hire" />
        </View>
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.paddleDark,
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    marginBottom: 50,
  },
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingLeft: 10,
    color: colors.white,
  },
});

export default CreateHireScreen;
