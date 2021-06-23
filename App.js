import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import * as Linking from "expo-linking";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Linking.createURL("")}</Text>
      <Text>scheme: {Constants.manifest.scheme}</Text>
      <Text>Version {Constants.manifest.version}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "cyan",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
