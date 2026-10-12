import React from "react";
import { Text, StyleSheet } from "react-native";

export default function WelcomeMessage() {
  return (
    <>
      <Text style={styles.text}>Hello, Pitoc!</Text>
      <Text style={styles.text}>BSIS Section 3A</Text>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: "center",
  },
});
