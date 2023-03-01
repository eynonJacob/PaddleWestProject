import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import { Button } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import StaffScreen from "../screens/StaffScreen";
import NewStaffScreen from "../screens/NewStaffScreen";

const Stack = createStackNavigator();

const StaffNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Staff"
      component={StaffScreen}
      options={({ navigation }) => ({
        presentation: "stack",
        headerRight: () => (
          <Button
            title="+   "
            color={colors.paddleOrange}
            onPress={() => navigation.navigate("NewStaff")}
          />
        ),
      })}
    />
    {/* <Stack.Screen
      name="StaffScreen"
      component={StaffDetailsScreen}
      options={({ route }) => ({ title: route.params.StaffID })}
    /> */}
    <Stack.Screen
      name="NewStaff"
      component={NewStaffScreen}
      options={{
        title: "Add New Staff",
        // animationEnabled: false,
      }}
    />
  </Stack.Navigator>
);

export default StaffNavigator;
