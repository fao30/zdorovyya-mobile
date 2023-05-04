import { StyleSheet, Text, View, Button } from "react-native";

export const universal = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerFont: {
    color: "#08024B",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    paddingTop: 24,
    marginHorizontal: 24,
    gap: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFA800",
    fontSize: 15,
    fontWeight: "400",
  },
  labelInput: {
    color: "#9197B3",
    marginTop: 10,
  },
});
