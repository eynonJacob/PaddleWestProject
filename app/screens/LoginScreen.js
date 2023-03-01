import React, { useContext } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import authApi from "../api/auth";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().max(4).label("User ID"),
  password: Yup.string().required().min(5).label("Password"),
});

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);
    if (!result.ok) return alert("Invalid credentials, try again");
    const user = jwtDecode(result.data);
    authContext.setUser(user);
    authStorage.storeToken(result.data);
    console.log(result.data);
  };

  return (
    //Background Image with a blur
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={10}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Screen style={styles.background}>
          <View style={styles.background}>
            <AppForm
              initialValues={{ userID: "", password: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <AppFormField
                name="email"
                style={styles.loginBox}
                placeholder="User ID"
                keyboardType="numeric"
                maxLength={4}
                icon="account-circle"
              />
              <AppFormField
                name="password"
                style={styles.loginBox}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                icon="lock"
                placeholder="Password"
                secureTextEntry={true}
                textContentType="password"
              />

              <View style={styles.buttonsContainer}>
                <SubmitButton title="Login" />
              </View>
            </AppForm>
          </View>
        </Screen>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 80,
    paddingHorizontal: 20,
    marginBottom: 50,
    width: 400,
  },
  loginBox: {
    width: "80%",
  },
});

export default LoginScreen;
