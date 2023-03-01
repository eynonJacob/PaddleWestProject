import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Screen style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
            <Text style={styles.text}>- Equipment Logging System -</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <AppButton
              title="Login"
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
          </View>
        </View>
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    marginBottom: 50,
    width: 400,
  },
  logo: {
    height: 50,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: "8%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    color: colors.paddleWhite,
  },
});

export default WelcomeScreen;
