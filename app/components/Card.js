import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppTextInput from "./AppTextInput";

function Card({ title, subTitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100 %",
    height: 150,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 7,
  },
});

export default Card;
