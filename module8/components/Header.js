import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Student Task &amp; Blog App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#5B4B8A",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
