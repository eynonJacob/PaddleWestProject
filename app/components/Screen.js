import React from "react";
import Constants from "expo-constants";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <KeyboardAvoidingView style={styles.view}>
      <SafeAreaView style={[styles.screen, style]}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    //backgroundColor: colors.light,
  },
  view: {
    flex: 1,
  },
});
export default Screen;
