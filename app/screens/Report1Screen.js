import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import colors from "../config/colors";
import Screen from "../components/Screen";

function Report1Screen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <ProgressChart
        data={[0.4, 0.6, 0.8]}
        width={Dimensions.get("window").width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.charts}
      />
      <LineChart
        data={{
          labels: ["January", "February", "March", "April"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={styles.charts}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 15,
  },
  charts: {
    marginVertical: 8,
    borderRadius: 16,
    alignItems: "center",
  },
});

export default Report1Screen;
