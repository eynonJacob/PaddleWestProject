import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EquipmentScreen from "../screens/EquipmentScreen";
import EquipmentDetailsScreen from "../screens/EquipmentDetailsScreen";
import { Button } from "react-native";
import colors from "../config/colors";
import NewEquipmentScreen from "../screens/NewEquiptmentScreen";

const Stack = createStackNavigator();

const EquipmentNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Equipment"
      component={EquipmentScreen}
      options={({ navigation }) => ({
        presentation: "stack",
        headerRight: () => (
          <Button
            title="+   "
            color={colors.paddleOrange}
            onPress={() => navigation.navigate("NewEquipment")}
          />
        ),
      })}
    />
    <Stack.Screen
      name="EquipmentDetailsScreen"
      component={EquipmentDetailsScreen}
      options={({ route }) => ({ title: route.params.equipmentID })}
    />
    <Stack.Screen
      name="NewEquipment"
      component={NewEquipmentScreen}
      options={{
        title: "Create New Equipment",
        // animationEnabled: false,
      }}
    />
  </Stack.Navigator>
);

export default EquipmentNavigator;
