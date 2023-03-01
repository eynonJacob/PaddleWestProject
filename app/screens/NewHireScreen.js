import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  DTPField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

import hiresApi from "../api/hires";

let today = new Date().toISOString().slice(0, 10);

const validationSchema = Yup.object().shape({
  equipmentID: Yup.string().required().label("Equipment ID"),
  dateOfReturn: Yup.date()
    .required()
    .typeError("The value must be a date (YY-MM-DD)")
    .min(today)
    .max(new Date(9999, 12, 31))
    .label("Return Date"),
  customerName: Yup.string().required().label("Name"),
  customerPhone: Yup.string().required().length(11).label("Phone Number"),
  customerEmail: Yup.string().email().label("Email"),
});

function NewHireScreen(props) {
  const handleSubmit = async (hire, { resetForm }) => {
    const result = await hiresApi.addHire(hire);
    if (!result.ok) return alert("Hire could not be recorded");
    alert("Hire successfully added");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      {/* <Text style={styles.headingText}>Create a Hire</Text> */}
      <ScrollView>
        <AppForm
          initialValues={{
            equipmentID: "",
            dateOfReturn: "",
            dateOfReturnDTP: "",
            //dateOfReturn: Date.now(),
            customerName: "",
            customerPhone: "",
            customerEmail: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="equipmentID"
            placeholder="Equipment ID"
            keyboardType="numeric"
            maxLength={4}
            width={150}
          />
          {/* <DTPField name="dateOfReturnDTP" placeholder="Return Date" /> */}
          {/* <DatePickerField
            mode="date"
            textColor="grey"
            name="dateOfReturn"
            value={initialValues.dateOfReturn}
            //onChange={setFieldValue}
          /> */}
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
          <SubmitButton title="Create Hire" onPress={() => navigation.pop()} />
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
