import { StyleSheet, Text, View, Button } from "react-native";

export const profileEdit = StyleSheet.create({
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
  },
  title: {
    color: "#08024B",
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    paddingTop: 24,
    marginHorizontal: 24,
    gap: 10,
  },
  labelInput: {
    color: "#9197B3",
    marginTop: 10,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFA800",
    fontSize: 20,
    fontWeight: "400",
  },
  radioButtonContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  radioButtonContainerInside: {
    flexDirection: "row",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: "20",
  },
  radioButtonTitle: {
    fontSize: 15,
  },
  dataPassport: {
    marginTop: 10,
    fontSize: 15,
  },
});
