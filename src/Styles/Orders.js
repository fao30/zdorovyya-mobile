import { StyleSheet, Text, View, Button } from "react-native";
export const orders = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  top: {
    marginTop: 24,
    paddingLeft: 24,
  },
  title: {
    color: "#08024B",
    fontWeight: "bold",
    fontSize: 20,
  },
  tags: {
    padding: 24,
    flexDirection: "row",
    gap: 10,
  },
  tag: {
    backgroundColor: "#E6EEFB",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    color: "#050220",
    borderRadius: 10,
  },
});
