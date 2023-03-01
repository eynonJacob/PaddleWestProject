import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

import staffApi from "../api/staff";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.number().required().max(9999).label("ID Number"),
  password: Yup.string().required().label("Password"),
});

function NewStaffScreen(props) {
  const handleSubmit = async (staff, { resetForm }) => {
    const result = await staffApi.addStaff(staff);
    if (!result.ok) return alert("Staff Member could not be recorded");
    alert("Staff Member successfully added");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="name"
            placeholder="Account Name"
            width={300}
            autoCorrect={false}
          />
          <AppFormField
            name="email"
            placeholder="ID Number"
            width={250}
            keyboardType="numeric"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
          />

          <SubmitButton title="Add Staff Member" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    paddingVertical: 10,
    color: defaultStyles.colors.paddleDark,
  },
});

export default NewStaffScreen;
