import React from "react";
import { Text, View } from "react-native";

import Card from "../components/Card";

function Tester(props) {
  return (
    <View
      style={{
        backgroundColor: "#CCE1FF",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Text>Tester Screen</Text>
      <Card
        title="7291 - John Smith"
        subTitle="due 14/07/2022"
        image={require("../assets/canoe.jpg")}
      />
    </View>
  );
}

export default Tester;
