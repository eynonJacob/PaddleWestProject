import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/AccountScreen";
import EquipmentScreen from "../screens/EquipmentScreen";
import EquipmentNavigator from "./EquipmentNavigator";
import StaffScreen from "../screens/StaffScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Equipment" component={EquipmentScreen} />
    <Stack.Screen name="Staff" component={StaffScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
