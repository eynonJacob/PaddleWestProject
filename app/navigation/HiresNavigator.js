import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ReturnsScreen from "../screens/ReturnsScreen";
import HireDetailsScreen from "../screens/HireDetailsScreen";
import NewHireScreen from "../screens/NewHireScreen";
import { Button } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator screenOptions={{ animationEnabled: true }}>
    <Stack.Screen
      name="Hires"
      component={ReturnsScreen}
      options={({ navigation }) => ({
        presentation: "stack",
        headerRight: () => (
          <Button
            title="+   "
            color={colors.paddleOrange}
            onPress={() => navigation.navigate("NewHire")}
          />
        ),
      })}
    />
    <Stack.Screen
      name="HireDetails"
      component={HireDetailsScreen}
      options={({ route }) => ({
        title: route.params.hireID,
      })}
    />

    <Stack.Screen
      name="NewHire"
      component={NewHireScreen}
      options={{
        title: "Create A New Hire",
        // animationEnabled: false,
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
