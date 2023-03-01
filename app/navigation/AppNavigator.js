import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import FeedNavigator from "./HiresNavigator";
import AccountNavigator from "./AccountNavigator";
import EquipmentNavigator from "./EquipmentNavigator";

import AccountScreen from "../screens/AccountScreen";
import StaffNavigator from "./StaffNavigator";
import ReportsScreen from "../screens/ReportsScreen";
import ReportsNavigator from "./ReportsNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator initialRouteName="Hires">
    <Tab.Screen
      name="Hires"
      component={FeedNavigator}
      options={{
        title: "Hires",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons
            name="format-list-bulleted"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Equipment"
      component={EquipmentNavigator}
      options={{
        title: "Equipment",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home-repair-service" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Staff"
      component={StaffNavigator}
      options={{
        title: "Staff",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="assignment-ind" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Reports"
      component={ReportsNavigator}
      options={{
        title: "Reports",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="book" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Logout"
      component={AccountScreen}
      options={{
        title: "Log Out",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="logout" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
