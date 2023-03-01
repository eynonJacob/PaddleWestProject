import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "Return History",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Hire History",
  },
  {
    title: "Maintenance",
    icon: {
      name: "access-alarm",
      backgroundColor: "red",
    },
    targetScreen: "Maintenance",
  },
];

function ReportsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={menuItems}
        keyExtractor={(menuItem) => menuItem.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon
                name={item.icon.name}
                backgroundColor={item.icon.backgroundColor}
              />
            }
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 15,
  },
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingVertical: 10,
    color: colors.paddleDark,
  },
});

export default ReportsScreen;
