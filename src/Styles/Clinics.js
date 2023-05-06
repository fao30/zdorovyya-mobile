import { StyleSheet, Text, View, Dimensions } from "react-native";
export const clinics = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  containerReview: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  clinicListStyle: {
    paddingTop: -50,
    height: 590,
  },
  doctorListStyle: {
    paddingTop: -50,
    height: 550,
  },
  containerDoctors: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
  },
  filters: {
    padding: 24,
    paddingBottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tabs: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
  },
  tabButton: {
    marginRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6eefb",
  },
  tabButtonActive: {
    marginRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e6eefb",
    backgroundColor: "#e6eefb",
  },
  tabText: {
    color: "#9197B3",
  },
  borderUnder: {
    borderWidth: 3,
    width: 90,
    borderColor: "#E6EEFB",
  },
  borderUnderDoctor: {
    borderWidth: 3,
    width: 122,
    borderColor: "#E6EEFB",
  },
  tabTextActive: {
    color: "#08024B",
  },
  searchResult: {
    color: "#9197B3",
    textAlign: "center",
    marginBottom: 16,
  },
  clinicCard: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingTop: 10,
    paddingRight: 24,
    width: "100%",
    gap: 8,
  },
  clinicContact: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
  },
  clinicContactDoctors: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingHorizontal: 24,
  },
  clinicContactDoctorsLess: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    // paddingHorizontal: 24,
  },
  clinicContactDetail: {
    marginTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
  },
  priceBox: {
    paddingVertical: 8,
  },
  doctorsBox: {
    flexDirection: "row",
  },
  clinicContactDetailMetro: {
    marginTop: 10,
    flexDirection: "row",
    gap: 5,
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
  },
  flexDirectionRow: {
    flexDirection: "row",
    gap: 2,
  },
  flexDirectionRowPaddingTop: {
    flexDirection: "row",
    gap: 2,
    paddingTop: 5,
  },
  avatar: {
    width: "50%",
    backgroundColor: "#fff",
  },
  avatarDetail: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  fav: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  clinicsImageDetail: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    top: 0,
  },
  reviewPad: {
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    position: "absolute",
    padding: 10,
    bottom: 0,
    left: 0,
    flexDirection: "row",
    gap: 3,
    borderRadius: 3,
  },
  clinicsImage: {
    width: "100%",
    height: 105,
    borderRadius: 15,
  },
  clinicInfo: {
    justifyContent: "space-between",
    width: "50%",
  },
  name: {
    fontSize: 16,
    color: "#050220",

    fontWeight: "bold",
  },
  nameDetail: {
    fontSize: 16,
    color: "#050220",

    fontWeight: "bold",
    marginVertical: 10,
  },
  clinicName: {
    fontSize: 16,
    color: "#050220",

    fontWeight: "bold",
  },
  count: {
    color: "#9197B3",
  },
  boxPrice: {
    paddingVertical: 20,
    paddingHorizontal: 5,
    borderColor: "#E6EEFB",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
    width: "100%",
  },
  boxPriceTitle: {
    width: "70%",
    flexWrap: "wrap",
  },
  boxPriceButton: {
    borderColor: "#1E62C2",
    borderRadius: 10,
    borderWidth: 3,
  },
  countTestimonies: {
    fontSize: 10,
    color: "#9197B3",
  },
  price: {
    fontSize: 18,
  },
  contact: {
    fontSize: 14,
  },
  detailText: { padding: 10, color: "#1E62C2" },
  contactCall: {
    fontSize: 14,
    color: "#3989FA",
  },
  clinicCountBranch: {
    fontSize: 14,
    color: "#9197B3",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 10,
  },
  textToMiddle: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  addressTitle: {
    fontSize: 16,
    color: "#050220",
    marginBottom: 4,
  },
  address: {
    fontSize: 13,
    color: "#3989FA",
    marginBottom: 4,
  },
  chooseAddress: {
    marginTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  chooseAddressLess: {
    marginTop: 10,
  },
  doctorsAddresses: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  doctorsAddressesDetail: {
    marginTop: 10,
    paddingLeft: 24,
    paddingRight: 24,
  },
  orderItem: {
    borderWidth: 1,
    borderColor: "#FFA800",
    padding: 12,
    borderRadius: 5,
    marginBottom: 8,
  },
  filterButton: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: 24,
    gap: 4,
  },
  daysGap: {
    flexDirection: "row",
    gap: 35,
  },
  gapArrowAndDate: {
    // flexDirection: "row",
    // gap: 20,
  },
  gapReviews: {
    flexDirection: "row",
    gap: 3,
  },
  gapTestimonial: {
    flexDirection: "columns",
    gap: 1,
  },
  boxTexstimonialGap: {
    flexDirection: "row",
    gap: 20,
  },
  testimonialBar: {
    flexDirection: "row",
    gap: 1,
    width: 150,
  },
  testimonialText: {
    color: "#FFA800",
  },
  testimonialTextView: {
    width: 20,
  },
  testimonialBarView: {
    width: "100%",
    // backgroundColor: "#FFA800",
  },
  review: {
    flexDirection: "row",
    gap: 5,
  },
  dotChoosenDate: {
    alignItems: "center",
  },
  dateShow: {
    flexDirection: "row",
    // justifyContent: "space-evenly",
    gap: 15,
    flexWrap: "wrap",
  },
  dateShowBox: {
    backgroundColor: "#3989FA",
    padding: 15,
    borderRadius: 10,
    color: "#ffffff",
  },
  ratingTop: {
    // backgroundColor: "#3989FA",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
  },
  ratingTopTextDiv: {
    width: "50%",
  },
  ratingTopText: {
    width: "80%",
    flexWrap: "wrap",
  },
  dateShowBoxTitle: {
    fontWeight: "bold",
    color: "#ffffff",
  },
  doctorName: {
    fontWeight: "bold",
  },
  doctorCategory: {
    fontSize: 15,
    marginTop: 5,
    color: "#9197B3",
  },
  clinicReviewTesti: {
    fontSize: 12,
    color: "#9197B3",
  },
  reviewShowDoctor: {
    paddingTop: 10,
    flexDirection: "row",
    gap: 10,
  },
  reviewGroupUsers: {
    paddingTop: 30,
    flexDirection: "row",
    width: "40%",
    gap: 5,
  },
  star: {
    marginTop: 3,
  },
  reviewBox: {
    flexDirection: "row",
    padding: 15,
    gap: 10,
    backgroundColor: "#E6EEFB",
    borderRadius: 10,
  },
  testimonialBox: {
    flexDirection: "row",
    padding: 15,
    gap: 10,
    backgroundColor: "#E6EEFB",
    borderRadius: 10,
  },
  testimonialBoxShow: {
    paddingVertical: 10,
    marginTop: 10,
    padding: 15,
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    // borderRadius: 10,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 1,
  },
  testimonialBoxShowTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
});
