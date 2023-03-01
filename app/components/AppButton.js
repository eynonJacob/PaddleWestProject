import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>

        <Text style={styles.text}>{title}</Text>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 80,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
      color: colors.white,
    textTransform: 'uppercase',
  },
});

export default AppButton;