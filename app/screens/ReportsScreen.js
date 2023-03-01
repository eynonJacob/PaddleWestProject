import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";

const menuItems = [
  {
    title: "Equipment Maintanance",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
    targetScreen: "Report1",
  },
  {
    title: "Staff Hire Stats",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Tester",
  },
  {
    title: "Another Report",
    icon: {
      name: "email",
      backgroundColor: "red",
    },
    targetScreen: "Tester",
  },
  {
    title: "Another",
    icon: {
      name: "email",
      backgroundColor: "green",
    },
    targetScreen: "Tester",
  },
  {
    title: "This One",
    icon: {
      name: "email",
      backgroundColor: "purple",
    },
    targetScreen: "Tester",
  },
];

function ReportsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      {/* <Text style={styles.headingText}>Reports</Text> */}
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
