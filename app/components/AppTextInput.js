import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.paddleWhite,
    borderRadius: 10,
    flexDirection: "row",

    padding: 15,
    marginVertical: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default AppTextInput;
