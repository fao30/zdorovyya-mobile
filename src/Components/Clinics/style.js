import { Platform, StyleSheet } from "react-native";
import constants from "./constants";

export default StyleSheet.create({
  singleContainer: {
    // padding: 10,
    // shadowOpacity: Platform.OS === "web" ? 0 : 0.18,
    // shadowRadius: 4,
    // shadowOffset: {
    //   height: 0,
    //   width: 0,
    // },
    paddingBottom: 16,
    paddingRight: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  singleDateBox: {
    borderRadius: constants.BORDER_RADIUS,
    overflow: "hidden",
    backgroundColor: constants.CALENDAR_BACKGROUND_COLOR,
    flexDirection: "column",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    // elevation: 6,
    zIndex: 3,
    gap: 4,
  },
  singleContainerSelected: {
    shadowRadius: 4,
  },
  closed: {
    color: "black",
  },
  monthContainerClosed: {
    backgroundColor: "black",
  },
  monthContainer: {
    backgroundColor: constants.MONTH_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
  },
  monthText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
  dateContainer: {
    gap: 4,
  },
  dateText: {
    marginTop: Platform.OS === "ios" ? 4 : 0,
    fontSize: 38,
    textAlign: "center",
  },
  dayContainer: {},
  dayText: {
    fontSize: Platform.OS === "ios" ? 16 : 15,
    textAlign: "center",
    color: "#000",
  },
  arrow: {
    height: constants.DAY_SIZE,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
