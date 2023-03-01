import React, { useContext } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    title: "Manage Equipment",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.EQUIPMENT,
  },
  {
    title: "View Staff List",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.STAFF,
  },
];

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/pfp.jpg")}
        />
      </View>
      {/* <View style={styles.container}>
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
      </View> */}

      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="red" />}
        onPress={handleLogout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
