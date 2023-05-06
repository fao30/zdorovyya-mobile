import { StyleSheet, Text, View, Button } from "react-native";
export const navstyle = StyleSheet.create({
  container: {
    marginTop: "auto",
    padding: 12,
    paddingTop: 0,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 74,
  },
  text: {
    fontSize: 9,
    color: "#9197B3",
  },
  textActive: {
    fontSize: 9,
    color: "#3989FA",
  },
  buttonActive: {
    alignItems: "center",
    justifyContent: "center",
    width: 74,
    borderTopWidth: 3,
    borderTopColor: "#3989FA",
    paddingTop: 8,
  },
});
