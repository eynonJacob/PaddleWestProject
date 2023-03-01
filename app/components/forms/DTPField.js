import React from "react";
import { useFormikContext } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";

import ErrorMessage from "./ErrorMessage";

function DTPField({ name, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  return (
    <>
      <DateTimePicker
        mode="date"
        textColor="grey"
        value={values[name]}
        selected={(value && new Date(value)) || null}
        onChange={(val) => {
          setFieldValue(name, val);
        }}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default DTPField;
