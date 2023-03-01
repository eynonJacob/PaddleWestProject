import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ReportsScreen from "../screens/ReportsScreen";
import Tester from "../screens/Tester";
import Report1Screen from "../screens/Report1Screen";

const Stack = createStackNavigator();

const ReportsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Reports" component={ReportsScreen} />
    <Stack.Screen name="Report1" component={Report1Screen} />
    <Stack.Screen name="Tester" component={Tester} />
  </Stack.Navigator>
);

export default ReportsNavigator;