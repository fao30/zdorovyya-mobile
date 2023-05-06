import { StyleSheet, Text, View, Button } from "react-native";
export const navstyle = StyleSheet.create({
  container: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "18%",
    gap: 5,
    paddingTop: 7,
    borderTopWidth: 3,
    borderTopColor: "transparent",
  },
  buttonActive: {
    alignItems: "center",
    justifyContent: "center",
    width: "18%",
    gap: 5,
    paddingTop: 7,
    borderTopWidth: 3,
    borderTopColor: "#3989FA",
  },
  text: {
    fontSize: 11,
    color: "#9197B3",
  },
  textActive: {
    fontSize: 11,
    color: "#3989FA",
  },
});
