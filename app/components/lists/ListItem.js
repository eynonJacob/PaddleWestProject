import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../../config/colors";

function ListItem({
  title,
  subTitle,
  IconComponent,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 7,
  },
});

export default ListItem;
