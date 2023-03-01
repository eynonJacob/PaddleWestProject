import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

import hiresApi from "../api/hires";
import equipmentApi from "../api/equipment";
import useApi from "../hooks/useApi";
import AppFormPicker from "../components/forms/AppFormPicker";

let today = new Date().toISOString().slice(0, 10);

const validationSchema = Yup.object().shape({
  equipmentID: Yup.number().required().nullable().label("Equipment ID"),
  dateOfReturn: Yup.date()
    .required()
    .typeError("The value must be a date (YYMMDD)")
    .min(today)
    .max(new Date(9999, 12, 31))
    .label("Return Date"),
  customerName: Yup.string().required().label("Name"),
  customerPhone: Yup.string().required().length(11).label("Phone Number"),
  customerEmail: Yup.string().email().required().label("Email"),
});

function NewHireScreen({ navigation }) {
  const getEquipmentApi = useApi(equipmentApi.getEquipment);
  useEffect(() => {
    getEquipmentApi.request();
  }, []);

  const handleSubmit = async (hire, { resetForm }) => {
    const result = await hiresApi.addHire(hire);
    if (!result.ok) return alert("Hire could not be recorded");
    alert("Hire successfully added");
    resetForm();
    navigation.navigate("Hires");
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            equipmentID: null,
            dateOfReturn: "",
            customerName: "",
            customerPhone: "",
            customerEmail: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormPicker
            items={getEquipmentApi.data}
            name="equipmentID"
            placeholder="Equipment ID"
          />

          <AppFormField
            name="dateOfReturn"
            placeholder="Return Date (YYMMDD)"
            keyboardType="numeric"
            maxLength={6}
            width={270}
          />
          <AppFormField
            autoCorrect={false}
            name="customerName"
            placeholder="Customer Name"
          />
          <AppFormField
            name="customerPhone"
            placeholder="Customer Phone Number"
            keyboardType="phone-pad"
            maxLength={11}
            width={300}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="customerEmail"
            placeholder="Customer Email"
            keyboardType="email-address"
          />
          <SubmitButton title="Create Hire" />
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

export default NewHireScreen;
