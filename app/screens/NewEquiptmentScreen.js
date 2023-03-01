import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

import equipmentsApi from "../api/equipment";

const validationSchema = Yup.object().shape({
  productName: Yup.string().required().label("Product Name"),
  dateOfPurchase: Yup.date().required().label("Date of Purchase"),
  hirePrice: Yup.number().required().label("Hire Price"),
});

function NewEquipmentScreen(props) {
  const handleSubmit = async (equipment, { resetForm }) => {
    const result = await equipmentsApi.addEquipment(equipment);
    if (!result.ok) return alert("Equipment could not be recorded");
    alert("Equipment successfully added");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            productName: "",
            dateOfPurchase: "",
            hirePrice: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField name="productName" placeholder="Product Name" />
          <AppFormField
            name="dateOfPurchase"
            placeholder="Purchase Date"
            keyboardType="numeric"
            maxLength={8}
            width={270}
          />
          <AppFormField
            name="hirePrice"
            placeholder="Hire Price"
            keyboardType="numeric"
            width={170}
          />

          <SubmitButton title="Add Equipment" />
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

export default NewEquipmentScreen;
