import { StyleSheet } from "react-native";
export const appointment = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: "1px",
    borderColor: "#E6EEFB",
    width: "100%",
    borderRadius: 8,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardTextHeading: {
    fontSize: 18,
    fontWeight: 700,
  },
  textQNA: {
    fontSize: 13,
    color: "#9197B3",
    fontWeight: 500,
  },
  input: {
    borderWidth: "1px",
    borderColor: "#C9CDDE",
    padding: 16,
    fontSize: 16,
    borderRadius: 8,
  },
  buttonConfirm: {
    backgroundColor: "#3989FA",
    paddingVertical: 20,
    borderRadius: 8,
  },
  buttonAnother: {
    borderColor: "#3989FA",
    borderWidth: "1px",
    paddingVertical: 20,
    borderRadius: 8,
  },
});
