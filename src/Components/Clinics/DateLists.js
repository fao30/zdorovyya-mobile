import React, { useState, useEffect } from "react";
import { TouchableOpacity, Icon, View, ImageBackground } from "react-native";
import { clinics } from "../../Styles/Clinics";
import { SvgXml } from "react-native-svg";
import { arrowRight, chosenDateIcon } from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";
import CalendarDaysCustom from "./CalenderDaysCustom";

export const DateLists = () => {
  const [token, setToken] = React.useState("");
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  return (
    <View style={clinics.gapArrowAndDate}>
      <CalendarDaysCustom
        // First day. Default = new Date()
        firstDate={"2023-05-15"}
        // Last day. You can set number of days instead
        lastDate={"2023-05-31"}
        // Sets number of days displaued. Default = 30
        numberOfDays={31}
        // Initial selected day. Default = firstDate
        selectedDate={"2019-07-10"}
        // Optional text that replaces week day in disabled days
        // disabledText={"close"}
        // scrollView width
        width={360}
        // Instead of width you can set number of days visible.
        daysInView={7}
        // Only available if width % 120 = 0. Scroll by full width
        // paginate={true}
        // Array of disabled dates. Default []
        // Function to get selected date in 'YYYY-MM-DD' format
        onDateSelect={(date) => {
          console.log(date, "<<<<<<");
        }}
        // Replaces scroll with left and right arrows.
        // Suitable for web where horizontal scroll is not always available
        // arrows={true}
        // Arrow icon components. Required if arrows={true}
        // leftArrow={<Icon name="arrow-back" size={26} color="#555" />}
        // rightArrow={<Icon name="arrow-forward" size={26} color="#555" />}
      />
      {/* <View>
        <SvgXml xml={arrowRight} />
      </View> */}
    </View>
  );
};
