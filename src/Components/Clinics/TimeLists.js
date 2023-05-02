import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import { clinics } from "../../Styles/Clinics";
import { SvgXml } from "react-native-svg";
import { arrowRight, chosenDateIcon } from "../../Icons/HideExpand";
import { favButton } from "../../Icons/Specializations";

export const TimeLists = ({ timeLists }) => {
  const [token, setToken] = React.useState("");
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setErrorFlag] = useState(false);

  return (
    <View style={clinics.dateShow}>
      {timeLists.map((e) => {
        return (
          <View style={clinics.dateShowBox}>
            <Text style={clinics.dateShowBoxTitle}>12:20</Text>
          </View>
        );
      })}
    </View>
  );
};
